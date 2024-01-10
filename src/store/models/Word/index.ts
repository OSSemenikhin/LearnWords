import Realm from 'realm';
import Group from '../Group';
import Translate from '../Translate';

export default class Word extends Realm.Object<Word> {
  _id!: Realm.BSON.ObjectId;
  value!: string;
  translates!: Realm.List<Translate>;
  groups?: Realm.List<Group>;

  static schema: Realm.ObjectSchema = {
    name: 'Word',
    primaryKey: '_id',
    properties: {
      _id: { type: 'objectId', default: () => new Realm.BSON.ObjectId() },
      value: { type: 'string', indexed: true },
      translates: 'Translate[]',
      groups: {
        type: 'list',
        objectType: 'Group',
      },
    },
  };
}
