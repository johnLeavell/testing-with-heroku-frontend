const prod ={
    url: {
        API_URL: 'https://https://evening-dawn-99907.herokuapp.com/'
    }
}

const dev ={
    url: {
        API_URL: 'http://localhost:3000'
    }
}

export const config = process.env.MODE_ENV === 'developnt' ? dev : prod; 