/*************************
 * ENVIRONMENT VARIABLES
 **************************/
module.exports = {
    //*************PRODCUTION DATABASE****************//
    // databaseUrl:"mongodb+srv://manoj:manoj123@cluster0.4dabazt.mongodb.net/process_play_book?retryWrites=true&w=majority",
  
    //*************AWS SERVER PRODUCTION DATABASE****************//
    // databaseUrl: "mongodb://processplaybook:fX1u4WjZ6RD1K80ol@3.111.164.28:27017/process_play_book?authSource=admin",
  
    //*************DEV DATABASE****************//
    databaseUrl:"mongodb://localhost:27017/insurance_db",
  
    BaseUrl: "http://localhost:7000",
    jwtTokenInfo: {
      secretKey:
        "9889D22341540031D3386132A7BDD38F4830474543C795D019561C0A308F502B",
      issuer: "QEPP",
      audience: "localhost:8080",
      algorithm: "HS256",
      expiresIn: "2h",
    },
    adminJwtTokenInfo: {
      secretKey:
        "1FF5C1ED994DEE6CE4123DC0262A78DFCE3E39618FB96E72D4F8840EDBFE9179",
      issuer: "QEPP",
      audience: "localhost:8080",
      algorithm: "HS256",
      expiresIn: "3h",
    },
    emailTokenInfo: {
      secretKey:
        "C094434C7F4F7893C24C7E098CB3C0E91310A2B688372F3DA986D14BAF6B1BDQ",
      issuer: "QEPP",
      audience: "localhost:8080",
      algorithm: "HS256",
      expiresIn: "1h",
    },
    mobileTokenInfo: {
      secretKey:
        "929FFGG453ERYUI456JKL00KIL42001926589GFGJKDHJJSBJ65568BBHHFSJS90",
      issuer: "QEPP",
      audience: "localhost:8080",
      algorithm: "HS256",
      expiresIn: "1h",
    },
    passwordResetTokenInfo: {
      secretKey:
        "50520F727971BEE4F5E7FAB94A61E91FCEE5BB6AB796C0B7EC9CF40991C39F74",
      issuer: "QEPP",
      audience: "localhost:8080",
      algorithm: "HS256",
      expiresIn: "1h",
    },
    emailServiceInfo: {
      senderEmail:
        "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",
      senderPassword: " IDontKnow1@",
      service: "SendGrid",
    },
    bcrypt: {
      saltValue: 8,
    },
    crypto: {
      secretKey: "YourSecretKeyForEncryption&Descryption",
    },
    aws: {
      accessKeyId: "AKIAUGBVTP5AGYZXDB7E",
  
      secretAccessKey: "xjOSipDmqTuzxyf0ehAK+BRLBtKlGWCJIvQ6DjWf",
  
      region: "ap-south-1",
  
      s3Bucket: "processplaybook",
  
      // s3AvatarBucket: "fetch-avatar",
    },
    // aws: {
    //   accessKeyId: "AKIATPRA4XASNPBJ24ET",
    //   secretAccessKey: "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",
    //   region: "us-east-1",
    //   s3Bucket: "fetch-delivery",
    //   s3AvatarBucket: "fetch-avatar",
    // },
    socialLogin: {
      google_client_id:
        "824295631640-ps25i8isn47ckmerqibcq0ftik3c8v7n.apps.googleusercontent.com",
      facebook_client_id: "1011221082611310",
      facebook_client_secret: "5ade930469d741507e4096196263d7d9",
    },
    /*stripe: {
        secretKey: 'sk_live_Pk58DPcqiyyvkYlgiUYR865G00Dk87YQb5',
        webhook_secret: 'whsec_Q7PFF9QbZxMnvYvLCSR7qUe0grmJslnu'
      },*/
    upload_path: "public/uploads",
    /**
     * Payumoney setup
     * */
  };
  