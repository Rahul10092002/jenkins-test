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
            }
        }

        stage('Build') {
            steps {
               echo 'Build step here (optional now)'
            }
        }

        stage('Test') {
            steps {
                echo 'Test step here (optional now)'
            }
        }

        stage('Deploy (Local)') {
            steps {
                echo 'Deploy step here (optional now)'
            }
        }
    }
}
