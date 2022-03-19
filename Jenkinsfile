pipeline {
  agent any
  environment {
		registryCredential = 'dockerhub' 
	}
  stages {
    stage('Build') {
			steps {
				dir('devops-todos'){
					sh 'docker build -t mahmoodsultan/devops-backend:ci.0.1 .'
				}
			} 
		}
    stage('Test') {
      steps {
			dir('devops-todos'){
				sh 'docker container run --rm -p 8081:8080 --name node -d mahmoodsultan/devops-backend:ci.0.1' 
				sh 'sleep 5'
				sh 'curl -I http://localhost:8081'
			}
		} 
	}
    stage('Publish') {
			steps{
				script {
					docker.withRegistry( '', registryCredential ) {
						sh 'docker push mahmoodsultan/devops-backend:ci.0.1'
					} 
				}
			} 
		}
	}
}