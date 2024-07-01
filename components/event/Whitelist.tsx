import React, { useState } from 'react';
import { Stack, Typography, Box, Divider } from '@mui/material';
import { ZuButton } from '@/components/core';
import { ArrowUpLeftIcon, RightArrowIcon, ScrollIcon, ChevronDownIcon, ChevronUpIcon, HeartIcon } from '@/components/icons';

interface IProps {
  setIsVerify?: React.Dispatch<React.SetStateAction<boolean>> | any;
  setIsAgree?: React.Dispatch<React.SetStateAction<boolean>> | any;
  setIsMint?: React.Dispatch<React.SetStateAction<boolean>> | any;
  setIsTransaction?: React.Dispatch<React.SetStateAction<boolean>> | any;
  setIsComplete?: React.Dispatch<React.SetStateAction<boolean>> | any;
  handleClose?: () => void
}

export const Verify: React.FC<IProps> = ({ setIsVerify }) => {
  const [isConnect, setIsConnect] = useState<boolean>(true);
  const [validate, setValidate] = useState<boolean>(true);
  const [verifying, SetVerifying] = useState<boolean>(false);

  return (
    <Stack>
      <Stack padding="20px" spacing="10px" borderBottom="1px solid #383838" bgcolor="#262626">
        <Stack direction="row" spacing="10px" alignItems="center">
          <Box component="img" height="30px" width="30px" borderRadius="2px" src="/14.webp" />
          <Typography variant="subtitleLB">
            EventName
          </Typography>
        </Stack>
        <Typography variant="bodyS" color="#FF9C66">
          Disclaimer: the ticketing system is in beta, please take caution moving forward
        </Typography>
      </Stack>
      <Stack padding="20px" height="100vh">
        <Stack padding="20px" border="1px solid #383838" bgcolor="#262626" spacing="20px" borderRadius="10px">
          <Typography variant="subtitleLB">
            Connect Wallet
          </Typography>
          {
            isConnect ? <Stack spacing="10px">
              <Typography variant="bodyBB" textAlign="center">
                Verify your address
              </Typography>
              <ZuButton startIcon={<RightArrowIcon color="#67DBFF" />}
                onClick={() => setIsConnect(false)}
                sx={{ width: "100%", color: "#67DBFF", backgroundColor: "#67DBFF33", border: "border: 1px solid rgba(103, 219, 255, 0.20)" }}>
                Connect
              </ZuButton>
            </Stack> :
              verifying ?
                <Stack paddingY="20px" bgcolor="#FFFFFF0D" borderRadius="10px">
                  <Typography variant="subtitleS" textAlign="center">
                    Verifying address
                  </Typography>
                </Stack> :
                validate ?
                  <>
                    <Stack paddingY="20px" bgcolor="#7DFFD10D" borderRadius="10px">
                      <Typography variant="subtitleS" textAlign="center" color="#7DFFD1" sx={{ opacity: 0.7 }}>
                        Validated!
                      </Typography>
                    </Stack>
                    <ZuButton startIcon={<RightArrowIcon color="#67DBFF" />}
                      onClick={() => setIsVerify(true)}
                      sx={{ width: "100%", color: "#67DBFF", backgroundColor: "#67DBFF33", border: "border: 1px solid rgba(103, 219, 255, 0.20)" }}>
                      Next
                    </ZuButton>
                  </> :
                  <Stack spacing="10px">
                    <Stack paddingY="20px" bgcolor="#FFFFFF0D" borderRadius="10px">
                      <Typography variant="subtitleS" textAlign="center" color="#FF5E5E">
                        Address invalid. Please connect a valid address.
                      </Typography>
                    </Stack>
                    <ZuButton startIcon={<RightArrowIcon color="#67DBFF" />}
                      onClick={() => setIsConnect(false)}
                      sx={{ width: "100%", color: "#67DBFF", backgroundColor: "#67DBFF33", border: "border: 1px solid rgba(103, 219, 255, 0.20)" }}>
                      Connect
                    </ZuButton>
                  </Stack>
          }
          <Stack direction="row" spacing="10px" justifyContent="center">
            <Typography variant="caption" sx={{ opacity: 0.6 }}>
              TICKETING PROTOCOL:
            </Typography>
            <ScrollIcon />
          </Stack>
        </Stack>
      </Stack>

    </Stack>
  )
}

export const Agree: React.FC<IProps> = ({ setIsVerify, setIsAgree }) => {
  return (
    <Stack>
      <Stack padding="20px" spacing="10px" borderBottom="1px solid #383838" bgcolor="#262626">
        <Stack direction="row" spacing="10px" alignItems="center">
          <Box component="img" height="30px" width="30px" borderRadius="2px" src="/14.webp" />
          <Typography variant="subtitleLB">
            EventName
          </Typography>
        </Stack>
        <Typography variant="bodyS" color="#FF9C66">
          Disclaimer: the ticketing system is in beta, please take caution moving forward
        </Typography>
      </Stack>
      <Stack padding="20px" height="100vh">
        <Stack padding="20px" border="1px solid #383838" bgcolor="#262626" spacing="20px" borderRadius="10px">
          <Typography variant="subtitleLB">
            Attendees Must Know,
          </Typography>
          <Stack spacing="10px" paddingX="10px">
            <Typography variant="subtitleMB" sx={{ opacity: 0.8 }}>
              Artificial Intelligence (AI) Disclaimer
            </Typography>
            <Typography variant="bodyB" sx={{ opacity: 0.7 }} height="550px" overflow="scroll">
              If your company publishes content generated by artificial intelligence (AI) or machine learning models, consider adding an AI disclaimer to your site to differentiate it from your human-created content.
              Over the past few years, AI technology quickly advanced and become more accessible to the everyday internet user.
              For example, businesses can now use AI to create customized icons or quickly write blog posts using AI for their websites. And that&apos;s just a few examples from a rapidly-growing toolset.
              As exciting as this is, the U.S. Copyright Office released an AI Policy Guidance in the Spring of 2023 stating that you must disclaim any purely AI-created materials from your copyright application. Plus, your consumers also prefer knowing the difference.
              We suggest including a disclaimer on your website or app that explains what parts of your platform were created by people and the specific content, logos, or other features you made using AI.
              Confidentiality Disclaimer aka Email Disclaimer
              Confidentiality disclaimers, also known as email disclaimers, explain that some content is only intended to be seen by a certain audience — for example, private information in an email.
              Digital communication offers more opportunities for confidential information to be exposed or intercepted. A confidentiality disclaimer states who the message is for, why the recipient should not forward it to others, and who they should contact if they receive it by mistake.
              Email hosting company Zoho offers a sample disclaimer to include in an email signature:
              This message contains confidential information and is intended only for the individual named. If you are not the named addressee, you should not disseminate, distribute or copy this email. You cannot use or forward any attachments in the email. Please notify the sender immediately by email if you have received this email by mistake and delete this email from your system. Company X, Suite# 1, Street, City, Country, www.company.com
              Confidentiality disclaimers are commonly used in law, education, and healthcare — industries that rely on the transfer of sensitive information. For example, they&apos;re useful in situations where a business needs to ensure attorney-client privilege, safeguard sensitive personal data, or protect private health records.
              If you send emails containing protected health information to US medical patients, a confidentiality disclaimer is required to comply with the Health Insurance Portability and Accountability Act (HIPAA).
              The screenshot below shows a HIPPA email disclaimer sample from the University of Miami.
              Standard disclaimer text like this can help meet HIPAA&apos;s list of precautions for emails.
              If your business sends certain confidential information by email, add a confidentiality disclaimer to all electronic communications to comply with the law or just to ensure your messages are only seen by the intended audience.
              Warranty Disclaimer
              To explain that sellers and service providers are not bound by any implied promises about their products in the event of failures or defects, add warranty disclaimers to your website or app.
              These statements vary depending on the nature of your business but typically explain that a product or service is offered “as is” — implying that the customer or user accepts it in its current condition, including any unseen faults.
              For websites and apps, warranty disclaimers state that the company makes no promises about the accuracy and reliability of the content it publishes. Below, see an example from our warranty disclaimer template.
            </Typography>
          </Stack>
          <ZuButton startIcon={<RightArrowIcon color="#67DBFF" />}
            onClick={() => { setIsVerify(false); setIsAgree(true); }}
            sx={{ width: "100%", color: "#67DBFF", backgroundColor: "#67DBFF33", border: "border: 1px solid rgba(103, 219, 255, 0.20)" }}>
            Agree and Continue
          </ZuButton>
        </Stack>
      </Stack>
    </Stack>
  )
}

export const Mint: React.FC<IProps> = ({ setIsAgree, setIsMint }) => {
  const [awaiting, setAwaiting] = useState<boolean>(false);

  return (
    <Stack>
      <Stack padding="20px" bgcolor="#262626" borderBottom="1px solid #383838" spacing="20px">
        <Stack direction="row" spacing="10px" alignItems="center">
          <Box component="img" height="30px" width="30px" borderRadius="2px" src="/14.webp" />
          <Typography variant="subtitleLB">
            EventName
          </Typography>
        </Stack>
        <Typography variant="bodyS" color="#FF9C66">
          Disclaimer: the ticketing system is in beta, please take caution moving forward
        </Typography>
      </Stack>
      <Stack spacing="10px" padding="20px" height="100vh">
        <Stack spacing="20px">
          <Typography variant="subtitleLB">
            Your Ticket
          </Typography>
          <Stack alignItems="center">
            <Box component="img" width="250px" height="250px" borderRadius="20px" src="/26.png" />
          </Stack>
          <Stack border="1px solid #383838" borderRadius="20px" divider={<Divider sx={{ border: "1px solid #383838" }} />} spacing="10px" padding="20px">
            <Stack direction="row" spacing="10px">
              <Typography variant="bodyM" sx={{ opacity: 0.6 }}>
                Ticket:
              </Typography>
              <Typography variant="bodyBB" sx={{ opacity: 0.8 }}>
                Full Pass
              </Typography>
            </Stack>
            <Stack direction="row" spacing="10px">
              <Typography variant="bodyM" sx={{ opacity: 0.6 }}>
                Secondary Option:
              </Typography>
              <Typography variant="bodyBB" sx={{ opacity: 0.8 }}>
                Shared Room
              </Typography>
            </Stack>
            <Stack direction="row" spacing="10px">
              <Typography variant="bodyM" sx={{ opacity: 0.6 }}>
                Contributing Amount to Mint:
              </Typography>
              <Stack direction="row" spacing="5px">
                <Typography variant="bodyBB" sx={{ opacity: 0.8 }}>
                  0000
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  USDT
                </Typography>
              </Stack>
            </Stack>
            <Stack spacing="10px">
              <Typography variant="bodyM" sx={{ opacity: 0.6 }}>
                Ticket Description
              </Typography>
              <Typography variant="bodyS" sx={{ opacity: 0.8 }}>
                Get ready to groove at the Summer Music Festival! Join us for a day filled with live music, food trucks, and good vibes.
              </Typography>
            </Stack>
          </Stack>
          <ZuButton startIcon={<RightArrowIcon color="#67DBFF" />}
            onClick={() => { setIsAgree(false); setIsMint(true); }}
            sx={{ width: "100%", color: "#67DBFF", backgroundColor: "#67DBFF33", border: "border: 1px solid rgba(103, 219, 255, 0.20)" }}>
            Mint Ticket
          </ZuButton>
        </Stack>
        <Typography variant="bodyS" color="#FF9C66" sx={{ opacity: 0.8 }} textAlign="center">
          Make sure to also have native tokens in your wallet to finalize the transaction
        </Typography>
        <Stack direction="row" spacing="10px" justifyContent="center">
          <Typography variant="caption" sx={{ opacity: 0.6 }}>
            TICKETING PROTOCOL:
          </Typography>
          <ScrollIcon />
        </Stack>
      </Stack>
    </Stack>
  )
}

export const Transaction: React.FC<IProps> = ({ setIsMint, setIsTransaction, handleClose }) => {
  const [isWait, setIsWait] = useState<boolean>(false);

  return (
    <Stack>
      <Stack padding="20px" bgcolor="#262626" borderBottom="1px solid #383838" spacing="20px">
        <Stack direction="row" spacing="10px" alignItems="center">
          <Box component="img" height="30px" width="30px" borderRadius="2px" src="/14.webp" />
          <Typography variant="subtitleLB">
            EventName
          </Typography>
        </Stack>
        <Typography variant="bodyS" color="#FF9C66">
          Disclaimer: the ticketing system is in beta, please take caution moving forward
        </Typography>
      </Stack>
      <Stack padding="20px" height="100vh">
        {isWait ?
          <Stack padding="20px" spacing="30px" border="1px solid #383838" bgcolor="#262626" borderRadius="10px">
            <Typography variant="subtitleLB">
              Sign in Wallet
              define data that they interacting with contract
            </Typography>
            <Stack paddingY="20px" bgcolor="#FFFFFF0D" borderRadius="10px">
              <Typography variant="subtitleS" textAlign="center">
                Awaiting transaction...
              </Typography>
            </Stack>
            <Stack direction="row" spacing="10px" justifyContent="center">
              <Typography variant="caption" sx={{ opacity: 0.6 }}>
                TICKETING PROTOCOL:
              </Typography>
              <ScrollIcon />
            </Stack>
          </Stack> :
          <Stack padding="20px" spacing="30px" border="1px solid #383838" bgcolor="#262626" borderRadius="10px">
            <Typography variant="subtitleLB">
              Sign in Wallet
              define data that they interacting with contract
            </Typography>
            <Stack paddingY="20px" bgcolor="#FFFFFF0D" borderRadius="10px"
              onClick={() => { setIsMint(false); setIsTransaction(true); }}
              sx={{ cursor: "pointer" }}
            >
              <Typography variant="subtitleS" textAlign="center">
                Transaction Complete!
              </Typography>
            </Stack>
            <Stack direction="row" spacing="10px" justifyContent="center">
              <Typography variant="caption" sx={{ opacity: 0.6 }}>
                TICKETING PROTOCOL:
              </Typography>
              <ScrollIcon />
            </Stack>
          </Stack>
        }
      </Stack>
    </Stack>
  )
}

export const Complete: React.FC<IProps> = ({ setIsTransaction, setIsComplete, handleClose }) => {
  const [view, setView] = useState<boolean>(false);
  return (
    <Stack>
      <Stack padding="20px" bgcolor="#262626" borderBottom="1px solid #383838" spacing="20px">
        <Stack direction="row" spacing="10px" alignItems="center">
          <Box component="img" height="30px" width="30px" borderRadius="2px" src="/14.webp" />
          <Typography variant="subtitleLB">
            EventName
          </Typography>
        </Stack>
        <Typography variant="bodyS" color="#FF9C66">
          Disclaimer: the ticketing system is in beta, please take caution moving forward
        </Typography>
      </Stack>
      <Stack padding="20px" spacing="30px" alignItems="center" height="100vh">
        <Typography variant="subtitleLB">
          Congrats, you received
        </Typography>
        <Box component="img" width="250px" height="250px" borderRadius="20px" src="/26.png" />
        <Stack borderRadius="10px" border="1px solid #383838" width="100%"
          sx={{ cursor: "pointer" }}
          onClick={() => setView(prev => !prev)}
        >
          {
            !view ? (
              <Stack direction="row" spacing="10px" padding="10px 20px" justifyContent="center">
                <Typography variant="bodyM">
                  View Transaction Details
                </Typography>
                <ChevronDownIcon size={4.5} />
              </Stack>
            ) :
              (
                <Stack padding="20px" spacing="10px">
                  <Stack direction="row" spacing="10px" justifyContent="center">
                    <Typography variant="bodyM">
                      Close Transaction Details
                    </Typography>
                    <ChevronUpIcon size={4.5} />
                  </Stack>
                  <Stack border="1px solid #383838" borderRadius="20px" divider={<Divider sx={{ border: "1px solid #383838" }} />} spacing="10px" padding="20px">
                    <Stack direction="row" spacing="10px">
                      <Typography variant="bodyM" sx={{ opacity: 0.6 }}>
                        Ticket:
                      </Typography>
                      <Typography variant="bodyBB" sx={{ opacity: 0.8 }}>
                        Full Pass
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing="10px">
                      <Typography variant="bodyM" sx={{ opacity: 0.6 }}>
                        Secondary Option:
                      </Typography>
                      <Typography variant="bodyBB" sx={{ opacity: 0.8 }}>
                        Shared Room
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing="10px">
                      <Typography variant="bodyM" sx={{ opacity: 0.6 }}>
                        Contributing Amount to Mint:
                      </Typography>
                      <Typography variant="bodyBB" sx={{ opacity: 0.8 }}>
                        0000 USDT
                      </Typography>
                    </Stack>
                    <Stack spacing="10px">
                      <Typography variant="bodyM" sx={{ opacity: 0.6 }}>
                        Ticket Description
                      </Typography>
                      <Typography variant="bodyS" sx={{ opacity: 0.8 }}>
                        Get ready to groove at the Summer Music Festival! Join us for a day filled with live music, food trucks, and good vibes.
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              )
          }
        </Stack>
        <ZuButton startIcon={<ArrowUpLeftIcon size={5} color="#67DBFF" />}
          onClick={() => { setIsTransaction(false); setIsComplete(false); }}
          sx={{ width: "100%", backgroundColor: '#2c383b', color: "#67DBFF" }}
        >
          Back to Event View
        </ZuButton>
        <Stack spacing="10px" alignItems="center">
          <HeartIcon color="#FF5E5E" />
          <Typography variant="bodyMB" color="#FF5E5E" textAlign="center">
            Donate to the Event
          </Typography>
          <Typography variant="bodyBB">
            Send your donated tokens to zuvillage.eth
          </Typography>
        </Stack>
        <Stack direction="row" spacing="10px" justifyContent="center">
          <Typography variant="caption" sx={{ opacity: 0.6 }}>
            TICKETING PROTOCOL:
          </Typography>
          <ScrollIcon />
        </Stack>
      </Stack>
    </Stack>
  )
}


