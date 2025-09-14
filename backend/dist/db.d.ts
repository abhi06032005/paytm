import mongoose = require("mongoose");
interface Iuser {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}
declare const _default: {
    User: mongoose.Model<Iuser, {}, {}, {}, mongoose.Document<unknown, {}, Iuser, {}, mongoose.DefaultSchemaOptions> & Iuser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, mongoose.Schema<Iuser, mongoose.Model<Iuser, any, any, any, mongoose.Document<unknown, any, Iuser, any, {}> & Iuser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Iuser, mongoose.Document<unknown, {}, mongoose.FlatRecord<Iuser>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<Iuser> & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>>;
    Account: mongoose.Model<{
        userId: mongoose.Types.ObjectId;
        accountBalance: number;
    }, {}, {}, {}, mongoose.Document<unknown, {}, {
        userId: mongoose.Types.ObjectId;
        accountBalance: number;
    }, {}, mongoose.DefaultSchemaOptions> & {
        userId: mongoose.Types.ObjectId;
        accountBalance: number;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
        userId: mongoose.Types.ObjectId;
        accountBalance: number;
    }, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
        userId: mongoose.Types.ObjectId;
        accountBalance: number;
    }>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
        userId: mongoose.Types.ObjectId;
        accountBalance: number;
    }> & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>>;
};
export default _default;
//# sourceMappingURL=db.d.ts.map