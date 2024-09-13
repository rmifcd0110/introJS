// switch

const metodoPago = 'efectivo';

switch (metodoPago){
    case 'efectivo':
        console.log('pagaste en efectivo');
        break;
    case 'tarjeta':
        console.log('pagaste en tarjeta');
        break;
    case 'cheque':
        console.log('pagaste en cheque');
        break;
    default:
        console.log('No pagaste');
        break;
    
}