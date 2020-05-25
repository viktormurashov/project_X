import { 
    dealColumns,
    employerColumns,
    positionsColumns,
    typeofwork,
    seekerColumns,
    contractColumns,
    rentColumns,
    clientColumns,
    outletsColumns,
    paymentColumns,
} from './const';

export default class helper {
    getFieldsByName = (entityName) => {
        let entityColumns = [];
        switch(entityName) {
            case('deal'):
                entityColumns = dealColumns;
                break;
            case('positions'):
                entityColumns =  positionsColumns;
                break;
            case('typeofwork'):
                entityColumns = typeofwork;
                break;
            case('jobseeker'):
                entityColumns = seekerColumns;
                break;
            case('employer'):
                entityColumns = employerColumns;
                break;
            case('rent'):
                entityColumns = rentColumns;
                break;
            case('contract'):
                entityColumns = contractColumns;
                break;
            case('client'):
                entityColumns = clientColumns;
                break;
            case('outlets'):
                entityColumns = outletsColumns;
                break;
            case('payment'):
                entityColumns = paymentColumns;
                break;
            default:
                break;
        }

        return entityColumns;
    }
}
