import {ts_func} from './function';
import {TsClass as myClass} from "./class";
import {ts_interface_1, ts_i_3} from "./interface";

ts_func();

const ts_class_obj: myClass = new myClass();
ts_class_obj.ts_func_test();

const var_test: ts_interface_1 = {
    var_1: 'hello world',
    var_2: 100.1
};

const ts_3_test: ts_i_3 = {
    var_1: 'hello world',
    var_2: 100.1
};