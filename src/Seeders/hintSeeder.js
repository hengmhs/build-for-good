import { database } from "./firebase";
import { ref, set } from "firebase/database";

/*
  Create hints in firebase from array data
  */
const seedHints = (category, warningArr, adviceArr) => {
  const hintsRef = ref(database, `hints/${category}`);
  const warningObj = {};
  const adviceObj = {};
  for (let n = 0; n < warningArr.length; n++) {
    warningObj[n.toString()] = warningArr[n];
  }
  for (let i = 0; i < adviceArr.length; i++) {
    adviceObj[i.toString()] = adviceArr[i];
  }
  set(hintsRef, {
    advice: adviceObj,
    warning: warningObj,
  });
};
/*
  seedHints(
    "e-commerce",
    [
      "Unrealistically low prices",
      "Limited-time or urgent deals",
      "Encouraging transactions outside the platform",
      "New seller account or lack of reviews",
    ],
    [
      "Be careful abot deals that seem too good to be true",
      "Stick to secure payment options offered by the platform",
    ]

  seedHints(
    "investment",
    [
      "Strangers claiming to be finance professionals",
      "Dealing with entities based outside Singapore",
      "Promises of high returns with minimal risk",
    ],
    [
      "Verify the legitimacy of the entity and conduct thorough research before investing",
    ]
  );

  seedHints(
    "job",
    [
      "Job offers through unsolicited messages",
      "Promises of high earnings with minimal effort",
      "Requests for payment to secure the position",
    ],
    [
      "Research the company and position independently",
      "Never transfer money to secure a job offer",
    ]
  );

  seedHints(
    "laundering",
    [
      "Strangers asking to use your bank accounts for transations",
      "Ads for agent positions involving money transactions",
      "Lack of verifiable employer details",
      "Offers of commission for using your bank account",
    ],
    [
      "Avoid involvement in financial activities requested by strangers",
      "Be cautious of ads offering commission for using your bank account for transactions",
    ]
  );

  seedHints(
    "love",
    [
      "Attractive person sharing a tale of trouble or hardship",
      "Requests for payment, gifts, or investments as proof of love",
      "Reluctance to meet in person or have video calls",
    ],
    [
      "Be cautious of strangers online requesting money or investments",
      "Avoid sharing personal financial information with unknown individuals",
    ]
  );

  seedHints(
    "credit-for-sex",
    [
      "Unsolicited friend requests from attractive individuals",
      "Upfront payments with shopping credits or gift cards for sexual services",
      "Requests for remittance via post offices, wire transfers, or banks",
    ],
    [
      "Reject unsolicited requests for upfront payments in exchange for sexual services",
      "Avoid remitting money through non-traceable methods",
    ]
  );

  seedHints(
    "social-media-impersonation",
    [
      `"Friends" asking for gift card purchases`,
      "Requests for bank details and one-time passwords",
      "Requests for WhatsApp verification codes",
      "Trouble logging into online accounts or unauthorized transactions",
    ],
    [
      "Verify requests with friends through alternate channels before taking any action",
      "Refrain from sharing sensitive information or verification codes with unknown contacts",
    ]
  );

  seedHints(
    "govt-impersonation",
    [
      "Calls from people claiming to be government officials",
      "Requests for personal particulars, bank account details, and OTPs",
      "Strangers telling you that you are in legal trouble",
      "Threats of police involvement or escalation without cooperation",
    ],
    [
      "Be skeptical of unsolicited calls from supposed government or official entities",
      "Never share personal details or OTPs with unknown callers",
      "Hang up and independently verify any urgent requests made by phone",
    ]
  );

   seedHints(
    "survey",
    [
      "Strangers offering monetary reward for survey completion",
      "Originating from foreign, non-Singapore phone numbers",
      "Legitimate interviewers and surveyors have to produce a letter of authorisation and identification, conducted in person and not via text messages",
    ],
    [
      "Scammers will offer you monetary reward to scan a QR code with the Singpass App and steal your credentials",
      "Do not scan any QR codes from strangers with your Singpass app",
      "Do not divulge any banking details",
    ]
  );
  */

export default seedHints;
