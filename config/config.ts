import { DevEuCentral } from "./dev/deveu-central-1";
import { DevUsEast } from "./dev/devus-east-1";




export const AppConfig={
    hpdemoDev:{
        env: {
            account: "015021686405",
            region: "us-east-1"
        },
        pipelineName: "hp-dev-demo-multiregion-github",
        pipelineStackName: "hp-dev-demo-multiregion-github",
        repoName: "hp-demo-multiregion-github",
        repoTriggerBranch: "dev",
        githubOrg:"piyush/1008",
        stages: [DevEuCentral, DevUsEast ],
    }
}