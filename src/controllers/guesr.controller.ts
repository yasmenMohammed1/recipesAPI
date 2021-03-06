import { Ips } from '../models/ip.model';
import { Ipservice } from '../services/guest.service';
import { BaseController } from './base.controller';
import { NextFunction, Request, Response } from 'express';
import requestIp from 'request-ip';
import mongoose, { model } from 'mongoose';
import axios from 'axios';
export class GuestIp extends BaseController<Ips> {
  _serviceObj: Ipservice = new Ipservice();
  async getIp(req: Request, res: Response, next: NextFunction) {
    let ip =
      process.env.NODE_ENV == 'production'
        ? req.headers['x-forwarded-for']
        : await axios
            .get(
              'https://ipgeolocation.abstractapi.com/v1/?api_key=11b08fed93e64fda8fd05a6837faac57'
            )
            .then((response: any) => {
              return response.data.ip_address;
            })
            .catch((error: any) => {
              return 'nowhere';
            });
    try {
      new Promise(async (res, rej) => {
        await model('ips')
          .create({
            ip: ip.toString()
          })
          .then(
            (doc) => {
              res(doc);
            },
            (err) => {
              rej(err);
            }
          );
      });
      return res.redirect('https://curiouscat.live/');
    } catch (err) {
      next(err);
    }
  }
}
