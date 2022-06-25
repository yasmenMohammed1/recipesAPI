import { BaseService } from './base.service';
import { IpModel, Ips } from '../models/ip.model';
import { ipRepo } from '../repositories/guest.repo';
export class Ipservice extends BaseService<Ips> {
  _repoobj = new ipRepo();
}
