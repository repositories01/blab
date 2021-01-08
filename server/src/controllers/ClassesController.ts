import { Request, Response } from 'express';
import * as jwt from '../config/jwt'
import crypto from "crypto";

import db from '../database/connection';

import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}
interface TokenInterface {
    user: number;
}

export default class ClassesController {
    async index(request: Request, response: Response) {

        const filters = request.query;

        if (Number(filters) >= 1) {

            const subject = filters.subject as string
            const week_day = filters.week_day as string;
            const time = filters.time as string;

            if (!filters.week_day || !filters.subject || !filters.time) {
                return response.status(400).json({
                    error: 'Missing filters to search classes'
                })
            }

            const timeInMinutes = convertHourToMinutes(time);

            const classes = await db('classes')
                .whereExists(function () {
                    this.select('class_schedule.*')
                        .from('class_schedule')
                        .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                        .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                        .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                        .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
                })
                .where('classes.subject', '=', filters.subject as string)
                .join('users', 'classes.user_id', '=', 'users.id')
                .select(['classes.*', 'users.*']);

            // return response.status(200).json(classes)
        }

        const classes = await db('classes')

        return response.json(classes);
    }

    async create(req: Request, res: Response) {

        const { whatsapp, bio, subject, cost, schedule } = req.body
        const headerAuth = req.headers.authorization;
        const trx = await db.transaction();
        const token = headerAuth ? headerAuth.split(' ')[1] : ''
        const decoded = jwt.verify(token);
        const userId = (decoded as TokenInterface).user

        try {

            await trx('users')
                .update({
                    whatsapp, bio
                }).where({ id: userId });


            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id: userId,
            });

            const class_id = insertedClassesIds[0];

            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                };
            })


            await trx('class_schedule').insert(classSchedule);

            await trx.commit();

            return res.status(201).json('New classe created successfuly')

        } catch (err) {
            await trx.rollback();
            console.log(err)

            return res.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }

    }
}

