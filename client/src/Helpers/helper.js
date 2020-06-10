import { 
    employeeColumns,
    employeeworkColumns,
    finalsalaryColumns,
    typeofworkColumns,
    workColumns,
} from './const';

export default class helper {
    getFieldsByName = (entityName) => {
        let entityColumns = [];
        switch(entityName) {
            case('employee'):
                entityColumns = employeeColumns;
                break;
            case('finalsalary'):
                entityColumns =  finalsalaryColumns;
                break;
            case('typework'):
                entityColumns = typeofworkColumns;
                break;
            case('work'):
                entityColumns = workColumns;
                break;
            case('employeework'):
                entityColumns = employeeworkColumns;
                break;
            default:
                break;
        }

        return entityColumns;
    }
}
