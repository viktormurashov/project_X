import { 
    clientColumns,
    discountColumns,
    roomColumns,
    settlingColumns,
    discountsettlingColumns,
} from './const';

export default class helper {
    getFieldsByName = (entityName) => {
        let entityColumns = [];
        switch(entityName) {
            case('client'):
                entityColumns = clientColumns;
                break;
            case('discount'):
                entityColumns =  discountColumns;
                break;
            case('room'):
                entityColumns = roomColumns;
                break;
            case('settling'):
                entityColumns = settlingColumns;
                break;
            case('discountsettling'):
                entityColumns = discountsettlingColumns;
                break;
            default:
                break;
        }

        return entityColumns;
    }
}
