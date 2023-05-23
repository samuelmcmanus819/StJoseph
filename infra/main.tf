resource "aws_amplify_app" "stjoseph" {
  name = "stjoseph"
  repository = "https://github.com/samuelmcmanus819/StJoseph"
  access_token = var.github_access_token

  build_spec = <<-EOT
    version: 0.1
    frontend:
      phases:
        preBuild:
          commands:
	    - cd website
            - yarn install
        build:
          commands:
            - yarn run build
      artifacts:
        baseDirectory: build
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
  EOT
}

resource "aws_amplify_branch" "main" {
  app_id = aws_amplify_app.stjoseph.id
  branch_name = "main"
  framework = "NextJS"
  stage = "PRODUCTION"
}
