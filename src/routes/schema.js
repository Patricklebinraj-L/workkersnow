
const Schema = () => {

    return [

        {
            path: '/',
            pageName: 'home',
            noFooter: true
        },
        {
            path: '/editor',
            pageName: 'Editor',
            noFooter: true
        },
        {
            path: '/posts',
            pageName: 'posts',
            noFooter: true
        },
        {
            path: '/login',
            pageName: 'login',
            chunk:
                [{
                    page: 'login',
                    name: 'login',
                },]
        },
        {
            path: '/signup',
            pageName: 'signup',
            chunk:
                [{
                    page: 'signup',
                    name: 'signup',
                },]
        },
        {
            path: '*',
            pageName: 'error',
            redux: 'error',
        },


    ]
}

export default Schema;