import { Environment } from "aws-cdk-lib";
import { ApplicationStageProps } from "./ApplicationStageProps";


//TODO remove this
// export interface PipelineStackProps {
//     env: Environment,
//     repoName: string;
//     stages:  ApplicationStageProps[];
//     notifications: string[];
// }

export interface PipelineStackProps {
    pipelineName: string;
    repoTriggerBranch: string;
    pipelineStackName: string;
    env: Environment,
    repoName: string;
    githubOrg:string;
    stages:  ApplicationStageProps[];
  }