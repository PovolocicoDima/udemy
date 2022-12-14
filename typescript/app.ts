enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS = 'p',
  FAILED = 'f',
}


const res = {
  message: 'paymant pass',
  statusCode: StatusCode.SUCCESS
};

if (res.statusCode === StatusCode.SUCCESS) {

}

function action(status: StatusCode) {

}

action(StatusCode.SUCCESS);
action(1);
action(StatusCode.FAILED);