import { environment } from "@src/environments/environment"

export const routesPath = {
    loggedin: {
        path:'in',
        exampleList: 'examplelist',
        exampleForm: 'example-form'
    },
    loggedout: {
        path:'out',
        login: 'login'
    },
    demo:{
        path:'demo',
        shared:'shared',
        controls:'controls'
    },
    static:{
        path:'static',
    }
}

export const apiUrls={
    api:environment.url,
    login:"/login"
}