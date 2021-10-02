import { environment } from "@src/environments/environment"

export const routesPath = {
    loggedin: {
        path:'in',
        exampleList: 'examplelist',
        exampleForm: 'example-form',
        userProfiles:'profiles',
        toDoMailbox:'todomailbox'
    },
    loggedout: {
        path:'out',
        login: 'login'
    },
    demo:{
        path:'demo',
        shared:'shared',
        controls:'controls',
        tables:'tables'
    },
    static:{
        path:'static',
    }
}

export const apiUrls={
    api:environment.url,
    login:"/login"
}