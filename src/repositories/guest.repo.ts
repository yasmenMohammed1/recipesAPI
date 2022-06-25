import { IpModel, Ips } from '../models/ip.model';
import { BaseRebo } from './Base.repo';

export class ipRepo extends BaseRebo<Ips> {
  _collectionName: string = 'ips';
  _model = IpModel;
}
