terraform {
  required_providers {
    aws = {
        # source = "hashicorp/aws"
        version = "3.27"
    }
  }
}

provider "aws" {
    profile = "default"
    region = "us-east-1"
}


resource "aws_s3_bucket" "b" {
  bucket = "brettd-reactjs-test"
  acl    = "public-read"
  policy = file("policy.json")

  website {
    index_document = "index.html"
    error_document = "error.html"

    routing_rules = <<EOF
[{
    "Condition": {
        "KeyPrefixEquals": "docs/"
    },
    "Redirect": {
        "ReplaceKeyPrefixWith": "documents/"
    }
}]
EOF
  }
}