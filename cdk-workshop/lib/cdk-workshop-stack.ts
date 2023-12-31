import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { HitCounter } from './hitcounter';
import { ServicePrincipal } from 'aws-cdk-lib/aws-iam';

export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // defines an AWS Lambda resource
    // const hello = new lambda.Function(this, 'HelloHandler', {
    //   runtime: lambda.Runtime.NODEJS_16_X,
    //   code: lambda.Code.fromAsset('lambda'),
    //   handler: 'hello.handler'
    // });

    // const helloWithCounter = new HitCounter(this, 'HelloHitCounter', {
    //   downstream: hello
    // });

    // defines an API Gateway API resource backed by 'hello' function
    // new apigw.LambdaRestApi(this, 'Endpoint', {
    //   handler: helloWithCounter.handler
    // });

    // hello.addPermission('PermitAPIGInvocation', {
    //   principal: new ServicePrincipal('apigateway.amazonaws.com'),
    //   //sourceArn: apigw.arnForExecuteApi('*')
    //   sourceArn: apigw.
    // });
  }
}
