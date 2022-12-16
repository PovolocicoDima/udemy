function generateError(message: string): never {
  throw new Error(message);
}

function dumpError(): never {
  return dumpError();
}

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction) {
  switch( action ) {
    case 'refund':
      // 
      break;
    case 'reject':
      // 
      break;  
    case 'checkout':
      // 
      break;
    default:
      const _: never = action;
      throw new Error('no action');
  }
}

function isString(x: string | number): boolean {
  if (typeof x === 'string') {
    return true;
  } else if (typeof x === 'number') {
    return false;
  }

  generateError('error'); 
}