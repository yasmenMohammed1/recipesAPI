import { Ips } from '../models/ip.model';
import { Ipservice } from '../services/guest.service';
import { BaseController } from './base.controller';
import { NextFunction, Request, Response } from 'express';
import mongoose, { model } from 'mongoose';

export class GuestIp extends BaseController<Ips> {
  _serviceObj: Ipservice = new Ipservice();
  async getIp(req: Request, res: Response, next: NextFunction) {
    const ip = req.socket.localAddress;
    try {
      new Promise(async (res, rej) => {
        await model('ips')
          .create({
            ip: ip
          })
          .then(
            (doc) => {
              console.log(req.socket.remoteAddress);
              res(doc);
            },
            (err) => {
              console.log(ip);

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
