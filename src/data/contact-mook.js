const mook_data = {
    contacts: [
        {
            id: 1,
            name: 'Homero Simpson',
            last_time_connected: '19:30',
            img: "https://www.cronista.com/files/image/693/693349/653119db35548.jpg",
            last_message: {
                text: 'D`oh!'
            },
            unread_messages: 1,
            messages: [
                {
                    from: 'USUARIO',
                    time: '14:15',
                    id: 101,
                    text: 'Vamos por una cerveza?',
                    status: ''
                },
                {
                    from: 'YO',
                    time: '14:22',
                    id: 102,
                    text: 'Hoy no puedo',
                    status: 'visto'
                },
                {
                    from: 'USUARIO',
                    time: '14:36',
                    id: 103,
                    text: 'D`oh!',
                    status: ''
                },
            ]
        },
        {
            id: 2,
            name: 'Marge Simpson',
            last_time_connected: '17:19',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUD6X9V9Ghjan8ZjuXRF5ztsIWq_Dpwk7k6g&s",
            last_message: {
                id: 2,
                text: 'En un momento asi, solo se puede reir.'
            },
            unread_messages: null,
            messages: [
                {
                    from: 'USUARIO',
                    time: '16:11',
                    id: 2,
                    text: 'En un momento asi, solo se puede reir.',
                    status: ''
                },
            ]
        },
        {
            id: 3,
            name: 'Bart Simpson',
            last_time_connected: '12:17',
            img: "https://i.pinimg.com/736x/f2/c9/c5/f2c9c5be7c183632bde76c201d5ceca8.jpg",
            last_message: {
                id: 3,
                text: 'Si yo hice algo malo y nadie me atrapó, ¿eso me hace bueno?'
            },
            unread_messages: 1,
            messages: [
                {
                    from: 'USUARIO',
                    time: '23:12',
                    id: 3,
                    text: 'Si yo hice algo malo y nadie me atrapó, ¿eso me hace bueno?',
                    status: ''
                },
            ]
        }
    ]
}

export default mook_data