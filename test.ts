import { Configuration } from "./configuration";
import { ProcessDefinitionApi } from "./api";


const configuration = new Configuration({ basePath: 'http://localhost:8080/engine-rest' });

const api = new ProcessDefinitionApi(configuration);
const res = api.getProcessDefinitions().then(response => console.log(response.data));

