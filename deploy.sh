#!/bin/bash

rm -rf public
rm public.tar.gz

yarn build

tar -zcf public.tar.gz public/

scp -i /home/barreto/Chaves/MyAwsKey.pem public.tar.gz ubuntu@ec2-54-94-158-52.sa-east-1.compute.amazonaws.com:/home/ubuntu/sites/todoApp

ssh -i /home/barreto/Chaves/MyAwsKey.pem ubuntu@ec2-54-94-158-52.sa-east-1.compute.amazonaws.com 'rm -rf /home/ubuntu/sites/todoApp/public'
ssh -i /home/barreto/Chaves/MyAwsKey.pem ubuntu@ec2-54-94-158-52.sa-east-1.compute.amazonaws.com 'tar -zxf /home/ubuntu/sites/todoApp/public.tar.gz -C /home/ubuntu/sites/todoApp'
ssh -i /home/barreto/Chaves/MyAwsKey.pem ubuntu@ec2-54-94-158-52.sa-east-1.compute.amazonaws.com 'rm /home/ubuntu/sites/todoApp/public.tar.gz'

rm -rf public
rm public.tar.gz
