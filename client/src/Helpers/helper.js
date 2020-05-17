import { 
    dealColumns,
    employerColumns,
    positionsColumns,
    typeofwork,
    seekerColumns,
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
            default:
                break;
        }

        return entityColumns;
    }
}
