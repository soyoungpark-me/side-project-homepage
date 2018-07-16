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
    // stage('Build Docker test'){
    //  sh 'docker build -t homepagefe -f Dockerfile.test --no-cache .'
    // }
    // stage('Docker test'){
    //   sh 'docker run --rm homepagefe'
    //   sh 'q'
    // }
    // stage('Clean Docker test'){
    //   sh 'docker rmi homepagefe'
    // }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sh 'docker rmi -f homepagefe:latest'
        sh 'docker rm -f homepagefe'
        sh 'docker rmi $(docker images -a | grep "<none>" | awk '{print $3}')'
        sh 'docker build -t homepagefe --no-cache .'
        sh 'docker run -d -p 9008:9008 --name=homepagefe homepagefe:latest'
        // sh 'docker tag homepagefe localhost:9008/homepagefe'
        // sh 'docker push localhost:9008/homepagefe'
        // sh 'docker rmi -f homepagefe localhost:9008/homepagefe'
      }
    }
  }
  catch (err) {
    throw err
  }
}