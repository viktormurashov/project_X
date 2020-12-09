import { 
    documentColumns,
    clientColumns,
    categoriesproductsColumns,
    historyColumns,
} from './const';

export default class helper {
    getFieldsByName = (entityName) => {
        let entityColumns = [];
        switch(entityName) {
            case('document'):
                entityColumns = documentColumns;
                break;
            case('client'):
                entityColumns = clientColumns;
                break;
            case('categoriesproducts'):
                entityColumns = categoriesproductsColumns;
                break;
            case('pricehistory'):
                entityColumns = historyColumns;
                break;
            default:
                break;
        }

        return entityColumns;
    }
}
