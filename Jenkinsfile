pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git credentialsId: 'github-token', url: 'https://github.com/Rahul10092002/jenkins-test.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
               echo 'Install dependencies step here (optional now)'
                echo 'Installing dependencies...'
                // Example: sh 'npm install' or 'pip install -r requirements.txt'
            }
        }

        stage('Build') {
            steps {
               echo 'Build step here (optional now)'
                echo 'Building the project...'
            }
        }

        stage('Test') {
            steps {
                echo 'Test step here (optional now)'
                echo 'Running tests...'
            }
        }

        stage('Deploy (Local)') {
            steps {
                echo 'Deploy step here (optional now)'

                echo 'Deploying to local environment...'
            }
        }
    }
}
