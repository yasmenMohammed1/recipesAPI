import { Ips } from '../models/ip.model';
import { Ipservice } from '../services/guest.service';
import { BaseController } from './base.controller';
import { NextFunction, Request, Response } from 'express';
import mongoose, { model } from 'mongoose';
import { exec } from 'child_process';
import http from 'http';
export class GuestIp extends BaseController<Ips> {
  _serviceObj: Ipservice = new Ipservice();
  async getIp(req: Request, res: Response, next: NextFunction) {
    let ip: any;
    try {
      exec('curl ip-adresim.app', function (error: any, stdout: any, stderr: any) {
        if (error) return;
        console.log('your ip is :' + stdout);
        ip = stdout;
      });
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
