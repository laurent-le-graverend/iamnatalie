#  I am Natalie &nbsp;[![Build Status](https://travis-ci.org/laurent-le-graverend/iamnatalie.svg?branch=master)](https://travis-ci.org/laurent-le-graverend/iamnatalie)

_Nothing fancy to see here! Just the sources of the website iamnatalie.me_

## Stack

### Create Stack:

```bash
aws cloudformation create-stack \
    --stack-name iamnatalie \
    --template-body file://./cloudformation/template.yml \
    --region us-east-1 \
    --capabilities CAPABILITY_IAM \
    --parameters \
        ParameterKey=DomainName,ParameterValue=iamnatalie.me \
        ParameterKey=AcmCertificateArn,ParameterValue=$ARN_AWS_ACM
```

### Delete Stack

```bash
aws cloudformation delete-stack --stack-name iamnatalie --region us-east-1
```
