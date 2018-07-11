node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: master"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Build Docker test'){
     sh 'docker build -t homepageFE -f Dockerfile.test --no-cache .'
    }
    stage('Docker test'){
      sh 'docker run --rm homepageFE'
    }
    stage('Clean Docker test'){
      sh 'docker rmi homepageFE'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sh 'docker build -t homepageFE --no-cache .'
        sh 'docker tag homepageFE localhost:5002/homepageFE'
        sh 'docker push localhost:5002/homepageFE'
        sh 'docker rmi -f homepageFE localhost:5002/homepageFE'
      }
    }
  }
  catch (err) {
    throw err
  }
}