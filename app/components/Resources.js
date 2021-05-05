import React, { useEffect, useContext } from "react";
import { Linking } from "react-native";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Image,
  ScrollView,
} from "react-native";

import AppContext from "../../AppContext";
import axios from "axios";

import AppButton from "./AppButton";

const Resources = ({ navigation }) => {
  const { user } = useContext(AppContext);

  const [factors, setFactors] = React.useState([]);

  useEffect(() => {
    getUserFactors();
  }, []);

  const getUserFactors = async () => {
    const payload = {
      userId: user._id,
    };
    console.log(payload);
    axios
      .post("http://127.0.0.1:19002/CCSUWellness/resources", payload)
      .then((response) => {
        console.log("resource factors", response.data);
        setFactors(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const showValues = () => {
    console.log("factors", factors);
    return factors.map((factor) => {
      console.log("factor", factor);
      const wellnessFactorRating = factor.value,
        wellnessFactor = factor.factor;

      //showWellnessFactorLinks(wellnessFactor);
      if (wellnessFactor === "Financial") {
        return (
          <View key={wellnessFactor} style={styles.Financialbackground}>
            <Text style={styles.header}>Financial</Text>
            <Text style={styles.description}>
              The ability to maintain wellness through the availability to
              monetary goods. Financial wellness is a balance of the mental,
              spiritual and physical aspects of money.{" "}
            </Text>
            <Text style={styles.option}>Here Are Some Videos: </Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=tTUy_jtoAmA&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=5"
                )
              }
            >
              What is Financial Health?
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=tTUy_jtoAmA&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=5"
                )
              }
            >
              https://www.youtube.com/watch?v=tTUy_jtoAmA&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=5
            </Text>
            {/* h */}
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=Nolv6DL_P6M&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=6"
                )
              }
            >
              Money Mindfulness: Let’s get real about Financial Health
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=Nolv6DL_P6M&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=6"
                )
              }
            >
              https://www.youtube.com/watch?v=Nolv6DL_P6M&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=6
            </Text>
            {/* . */}
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=4t5XVFUrljQ&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=7"
                )
              }
            >
              How to properly assess your financial health (hint: not on
              Facebook)
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=4t5XVFUrljQ&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=7"
                )
              }
            >
              https://www.youtube.com/watch?v=4t5XVFUrljQ&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=7
            </Text>
            <Text style={styles.option}>Here Are Some Tips:</Text>
            <Text style={styles.body}>1. Part-time job on/off campus </Text>
            <Text style={styles.paragraph}>
              a. Many students in need of money will seek part-time employment –
              the decision being on or off campus.{" "}
            </Text>

            <Text style={styles.body}>
              2. Outside vendors come to campus to seek applicants
            </Text>
            <Text style={styles.paragraph}>
              a. Career Success Center brings in outside vendors (places to
              work) on a regular basis not only for seniors for full time work,
              but also for part-time and seasonal work.{" "}
            </Text>

            <Text style={styles.body}>3. Master the interview</Text>
            <Text style={styles.paragraph}>
              a. Resume – Career services can help you create and/or hone your
              resume so your information is easily available to anyone receiving
              the resume.
            </Text>
            <Text style={styles.paragraph}>
              b. Interview Skills – No matter how many times you interview there
              are always times you wished you had said something different.{" "}
            </Text>
            <Text style={styles.paragraph}>c. Careers in your major. </Text>

            <Text style={styles.body}>4. Beat the Budget Blues</Text>
            <Text style={styles.paragraph}>
              a. Budgets consist of earnings and expenditures. The difficulty
              resides in the earnings outweighing the expenditures.{" "}
            </Text>

            <Text style={styles.resources}>
              Resources: Bursar, Career Success Center, Financial Ai,
              Registrars, Veteran’s Affairs
            </Text>
          </View>
        );
      } else if (wellnessFactor === "Environmental") {
        return (
          <View key={wellnessFactor} style={styles.Enviornmentalbackground}>
            <Text style={styles.header}>Environmental</Text>
            <Text style={styles.description}>
              The willingness to recognize our ability to make a positive impact
              on the quality of our environment, be it our homes, our
              communities or our planet. Environmental wellness relies on having
              safety and security within the environment.{" "}
            </Text>
            <Text style={styles.option}>Here Are Some Vdeos:</Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=HcXHxSdhpgo&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=9"
                )
              }
            >
              {" "}
              Environmental Health
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=HcXHxSdhpgo&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=9"
                )
              }
            >
              {" "}
              https://www.youtube.com/watch?v=HcXHxSdhpgo&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=9
            </Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=natzQptZaRA&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=14"
                )
              }
            >
              {" "}
              Finding the Balance: Psychology of Built Environments
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=natzQptZaRA&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=14"
                )
              }
            >
              {" "}
              https://www.youtube.com/watch?v=natzQptZaRA&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=14
            </Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=JUq2PwDs8tw&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=25"
                )
              }
            >
              {" "}
              What is Environmental Health?
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=JUq2PwDs8tw&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=25"
                )
              }
            >
              {" "}
              https://www.youtube.com/watch?v=JUq2PwDs8tw&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=25
            </Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=x18wNgubfi8&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=8"
                )
              }
            >
              Environmental Health
            </Text>

            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=x18wNgubfi8&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=8"
                )
              }
            >
              https://www.youtube.com/watch?v=x18wNgubfi8&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=8
            </Text>
            <Text style={styles.option}>Here Are Some Tips</Text>
            <Text style={styles.body}>1. Peaceful place to learn</Text>
            <Text style={styles.paragraph}>
              a. Unless you can block out noise, find a quiet place to study,
              such as in the library, the fourth floor of Vance academic
              building, a back corner section of Willard Diloreto near the card
              office, inside the Wellness section of Student Wellness Center.
            </Text>

            <Text style={styles.body}>2. To Sleep, perchance to Dream</Text>
            <Text style={styles.paragraph}>
              a. make sure you have a place that is comfortable for sleeping.{" "}
            </Text>

            <Text style={styles.body}>3. Make meals social</Text>
            <Text style={styles.paragraph}>
              a. Meals should be with peers whenever possible – we are social
              beings, so spending time with peers while eating allows us to
              accomplish two tasks at once. We have the opportunity to find out
              what is happening in people’s lives as well as talk about the
              difficulties with classes, or work or whatever.
            </Text>

            <Text style={styles.body}>4. Find out about the neighborhood</Text>
            <Text style={styles.paragraph}>
              a. Get to know the campus and the shops and restaurants that
              surround the campus.{" "}
            </Text>

            <Text style={styles.body}>5. Small changes are easy </Text>
            <Text style={styles.paragraph}>
              You don’t have to walk every dog at the shelter, but the three you
              do walk twice a week will appreciate it.{" "}
            </Text>

            <Text style={styles.body}>
              6. How to deal with not having goals{" "}
            </Text>
            <Text style={styles.paragraph}>
              When an individual has no goals in life and finds themselves
              wandering, one of the best things they can do is find others who
              have goals and ask them how they came to those goals.
            </Text>

            <Text style={styles.resources}>
              Center for International Education (CIE); Health Services; Public
              Safety; Residence Life; Wellness Education
            </Text>
          </View>
        );
      } else if (wellnessFactor === "Social") {
        return (
          <View key={wellnessFactor} style={styles.Socialbackground}>
            <Text style={styles.header}>Social</Text>
            <Text style={styles.description}>
              The ability to relate to and connect with other people. It is the
              ability to establish and maintain positive relationships with
              family, friends and co-workers.{" "}
            </Text>
            <Text style={styles.option}>Here are some videos:</Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=VPE9CqRUp54")
              }
            >
              Sex, Dating and Relationships in College
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=VPE9CqRUp54")
              }
            >
              https://www.youtube.com/watch?v=VPE9CqRUp54
            </Text>
            <Text style={styles.option}>Here Are Some Tips:</Text>
            <Text style={styles.body}>1. How to make friends on campus </Text>
            <Text style={styles.paragraph}>
              a. A majority of students make friends at the Student Center aka
              the Campus Living Room.
            </Text>
            <Text style={styles.paragraph}>
              b. Another great place to meet and make friends are the clubs and
              intramurals on campus.
            </Text>

            <Text style={styles.body}>2. Connecting to the university </Text>
            <Text style={styles.paragraph}>
              a. Over a hundred clubs on campus that you can join. We encourage
              students to get involved. A nice place to start is with a club or
              CAN (Central Activities Network) where you can meet people with
              similar interests and plan activities for the campus.{" "}
            </Text>

            <Text style={styles.body}>3. Who provides support </Text>
            <Text style={styles.paragraph}>
              {" "}
              a. Students are supported by family, friends, faculty and staff at
              the university.
            </Text>

            <Text style={styles.body}>
              4. Healthy and unhealthy relationships
            </Text>
            <Text style={styles.paragraph}>
              a. Healthy relationships are HOT - honest, open and trustworthy.{" "}
            </Text>

            <Text style={styles.body}>5. Sexual relationships </Text>
            <Text style={styles.paragraph}>
              a. Dating sites and the dilemmas student’s face – identify the
              purpose behind the site and what people are looking to get from
              people on the site
            </Text>
            <Text style={styles.paragraph}>
              b. For the first meeting, make sure you are in a public place and
              if uncomfortable end the date early
            </Text>

            <Text style={styles.resources}>
              Resources: Student Clubs, Center for International Education
              (CIE), Counseling Center, Equity and Inclusion, Public Safety,
              ReCentral, Student Activities/ Leadership Development (SA/LD),
              Veteran’s Affairs, Wellness Education
            </Text>
          </View>
        );
      } else if (wellnessFactor === "Physical") {
        return (
          <View key={wellnessFactor} style={styles.Physicalbackground}>
            <Text style={styles.header}>Physical</Text>
            <Text style={styles.description}>
              The ability to maintain a healthy quality of life that allows for
              engaging in daily activities without undue fatigue or physical
              stress. It is the ability to recognize that behaviors have a
              significant impact on wellness, and to adopt healthful habits
              while avoiding destructive behaviors.{" "}
            </Text>
            <Text style={styles.option}>Here are some videos:</Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=xyQY8ang6g&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=4"
                )
              }
            >
              Emotion, Stress, and Health: Crash Course Psychology #26
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=xyQY8ang6g&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=4"
                )
              }
            >
              https://www.youtube.com/watch?v=xyQY8ang6g&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=4
            </Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=AEPnYII8uSI&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=21"
                )
              }
            >
              What is Physical Health?
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=AEPnYII8uSI&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=21"
                )
              }
            >
              https://www.youtube.com/watch?v=AEPnYII8uSI&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=21
            </Text>
            <Text style={styles.option}>Here Are Some Tips:</Text>
            <Text style={styles.body}>1. Bodies in Motion </Text>
            <Text style={styles.paragraph}>
              a. Being physical during your late teens and early twenties may
              seem like an additional use of time you just don’t have but it is
              time well spent. Exercising is one of the best ways to cope with
              stress.
            </Text>

            <Text style={styles.body}>2. Five Gyms around campus</Text>
            <Text style={styles.paragraph}>
              a. The flagship gym that just opened has an indoor track.{" "}
            </Text>

            <Text style={styles.body}>3. Missing your sport </Text>
            <Text style={styles.paragraph}>
              a. Try Intramurals – ReCentral has a number of intramural
              activities throughout the year.{" "}
            </Text>

            <Text style={styles.body}>4. Nutrition level up </Text>
            <Text style={styles.paragraph}>
              a. Try to level up on the nutrition scale - moving from one level
              to the next such as swapping out fried French fries and swapping
              in a fresh baked potato.{" "}
            </Text>

            <Text style={styles.body}>5. Motivation to move </Text>
            <Text style={styles.paragraph}>
              a. Make a list of 3 reasons why it is important to keep moving and
              have one be a health concern.{" "}
            </Text>
            <Text style={styles.paragraph}>
              b. Work with your resources to help maintain motivation.
            </Text>

            <Text style={styles.resources}>
              Resources: Athletics; Disability Services; Health Services;
              Intramurals; Public Safety; RECentral
            </Text>
          </View>
        );
      } else if (wellnessFactor === "Intellectual") {
        return (
          <View key={wellnessFactor} style={styles.Intellectualbackground}>
            <Text style={styles.header}>Intellectual</Text>
            <Text style={styles.description}>
              The ability to open our minds to new ideas and experiences that
              can be applied to personal decisions, group interaction and
              community improvement. It is the desire to learn new concepts,
              improve skills and seek challenges in pursuit of lifelong
              learning.{" "}
            </Text>
            <Text style={styles.option}>Here Are Some Videos:</Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=SJLx20eyYeQ&t=3s"
                )
              }
            >
              How to Study SMARTER Not Harder in College
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=SJLx20eyYeQ&t=3s"
                )
              }
            >
              https://www.youtube.com/watch?v=SJLx20eyYeQ&t=3s
            </Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=c7qSoCoM9i8&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=16"
                )
              }
            >
              What is Intellectual Health?
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=c7qSoCoM9i8&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=16"
                )
              }
            >
              https://www.youtube.com/watch?v=c7qSoCoM9i8&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=16
            </Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=RFa3pU3mLw&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=18"
                )
              }
            >
              Intellectual Wellness
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=RFa3pU3mLw&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=18"
                )
              }
            >
              https://www.youtube.com/watch?v=RFa3pU3mLw&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=18
            </Text>
            <Text style={styles.option}>Here Are Some Tips:</Text>
            <Text style={styles.body}>1. Research with professor/advisor </Text>
            <Text style={styles.paragraph}>
              a. There are select majors that have more opportunity for research
              than others, but many professors have special projects that
              students can get involved in.{" "}
            </Text>

            <Text style={styles.body}>2. Independent study</Text>
            <Text style={styles.paragraph}>
              a. An independent study is a contract between a student and the
              university for anywhere from 1-6 credits. The contract provides
              specifics as to the activities involved, the materials to be
              mastered, and the evaluation of the student’s work. communication
              with writers of research
            </Text>

            <Text style={styles.body}>
              3. Advise administrators of an issue on campus and create plan of
              action
            </Text>
            <Text style={styles.paragraph}>
              3. Advise administrators of an issue on campus and create plan of
              action
            </Text>

            <Text style={styles.body}>4. Life Goals</Text>
            <Text style={styles.paragraph}>
              a. List your life goals near and far and review them each morning,
              remove barriers
            </Text>

            <Text style={styles.body}>5. Time management</Text>
            <Text style={styles.paragraph}>
              a. Identify times you are most productive for school work and set
              aside for homework.
            </Text>

            <Text style={styles.body}>6. Study groups</Text>
            <Text style={styles.paragraph}>
              a. Get involved in study groups whenever you have a great deal of
              information to master in a short period of time.{" "}
            </Text>

            <Text style={styles.body}>7. How to cope with a bad grade </Text>
            <Text style={styles.paragraph}>
              a. One bad grade really doesn't change a life a great deal, but
              there are changes to face
            </Text>

            <Text style={styles.resources}>
              Resources: Athletics, Center for Advising and Career Exploration
              (CACE), Center for International Education (CIE); Disability
              Services; Learning Center; Public Safety; Registrars; Student
              Affairs, Office of; Student Disability Services; Writing Center;
              Wellness Education
            </Text>
          </View>
        );
      } else if (wellnessFactor === "Emotional") {
        return (
          <View key={wellnessFactor} style={styles.Emotionalbackground}>
            <Text style={styles.header}>Emotional</Text>
            <Text style={styles.description}>
              The ability to cope with the challenges of life. The ability to
              acknowledge and share feelings of anger, fear, sadness, or stress,
              as well as hope, love, joy and happiness in a productive manner.{" "}
            </Text>
            <Text style={styles.option}>Here Are Some Videos:</Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=uQJdV-Ck0k0&t=426s"
                )
              }
            >
              20 Forgotten Ways to Manage Stress in College
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=uQJdV-Ck0k0&t=426s"
                )
              }
            >
              https://www.youtube.com/watch?v=uQJdV-Ck0k0&t=426s
            </Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=gAMbkJk6gnE&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=3"
                )
              }
            >
              Feeling All the Feels: Crash Course Psychology #25
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=gAMbkJk6gnE&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=3"
                )
              }
            >
              https://www.youtube.com/watch?v=gAMbkJk6gnE&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=3
            </Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=PAestsXAWsw&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=15"
                )
              }
            >
              7 Ways to Detox Your Emotional Well Being
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=PAestsXAWsw&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=15"
                )
              }
            >
              https://www.youtube.com/watch?v=PAestsXAWsw&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=15
            </Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=06rdR_R6iok&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=24"
                )
              }
            >
              What is Emotional & Mental Health?
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=06rdR_R6iok&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=24"
                )
              }
            >
              https://www.youtube.com/watch?v=06rdR_R6iok&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=24
            </Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=V6ke_fObfsA&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=13"
                )
              }
            >
              Tips for Promoting Good Mental Health
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=V6ke_fObfsA&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=13"
                )
              }
            >
              https://www.youtube.com/watch?v=V6ke_fObfsA&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=13
            </Text>
            <Text style={styles.option}>Here Are Some Tips:</Text>
            <Text style={styles.body}>1. Make a to-do list</Text>
            <Text style={styles.paragraph}>
              a. To-Do list of 5-6 items only and schedule out homework at the
              same times each day to make it a habit – To Do lists are designed
              to make your life easier and make you more successful.{" "}
            </Text>

            <Text style={styles.body}>
              2. Maintain daily awareness of your stress level
            </Text>
            <Text style={styles.paragraph}>
              a. Remember to reduce activity when stress is high.{" "}
            </Text>

            <Text style={styles.body}>3. Mindfullness</Text>
            <Text style={styles.paragraph}>
              a. Focus on a moment of peace - take 10 minutes a day to deep
              breathe and imagine a calming place.{" "}
            </Text>

            <Text style={styles.body}>4. Take a Day Off</Text>
            <Text style={styles.paragraph}>
              a. Give yourself an activity, such as spending a day in Boston as
              a reward for getting through the semester.{" "}
            </Text>

            <Text style={styles.body}>5. See Your Success</Text>
            <Text style={styles.paragraph}>
              a. Keep an eye on your classroom requirements and check them off
              as you complete them.{" "}
            </Text>

            <Text style={styles.body}>6. Compromise when you can</Text>
            <Text style={styles.paragraph}>
              a. Creating a healthy roommate environment - first focus on
              compromise.{" "}
            </Text>

            <Text style={styles.resources}>
              Resources: Academic Calendar (time management), Athletics, Bursar,
              Center for Advising and Career Exploration (CACE), Counseling
              Center, Disability Services, Diversity and Equity, Office of,
              Intramurals, RECentral, Residence Life, Student Activities/
              Leadership Development (SA/LD), Student Affairs, Office of Student
              Clubs, Student Conduct, Student Disability Services, Wellness
              Education
            </Text>
          </View>
        );
      } else if (wellnessFactor === "Spiritual") {
        return (
          <View key={wellnessFactor} style={styles.Spiritualbackground}>
            <Text style={styles.header}>Spiritual</Text>
            <Text style={styles.description}>
              The ability to establish peace and harmony in our own lives. There
              exists congruency between values and actions, and a realization of
              purpose.{" "}
            </Text>
            <Text style={styles.option}>Here Are Some Videos:</Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=8gZ_JbDgERs&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=23"
                )
              }
            >
              What is Spiritual Health?
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=8gZ_JbDgERs&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=23"
                )
              }
            >
              https://www.youtube.com/watch?v=8gZ_JbDgERs&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=23
            </Text>
            <Text style={styles.option}>Here Are Some Tips:</Text>
            <Text style={styles.body}>
              1. Volunteer at agency on/off campus
            </Text>
            <Text style={styles.paragraph}>
              a. Volunteer work can be extremely rewarding. There have been
              students who start volunteering and then make that their life's
              work{" "}
            </Text>

            <Text style={styles.body}>2. Spend time with friends. </Text>
            <Text style={styles.paragraph}>
              a. Friends can help us maintain our spiritual and emotional
              wellbeing.{" "}
            </Text>

            <Text style={styles.body}> 3. Giving back in your own way </Text>
            <Text style={styles.paragraph}>
              c. feeding birds, working with animals, working with people,
              volunteering to sort materials for a friend who is moving. Doesn't
              matter what we do, just giving back in our own way makes us feel
              good. going to the shelter.{" "}
            </Text>

            <Text style={styles.body}>4. Values ranking exercise </Text>
            <Text style={styles.paragraph}>
              a. Exercise in ranking a list of values to determine what is most
              important to you.{" "}
            </Text>

            <Text style={styles.body}>5. Role of a mentor </Text>
            <Text style={styles.paragraph}>
              a. identifying who can help you focus on your values. Many times
              people choose a mentor based on their intellectual capacity, which
              is reasonable but doesn’t always work out. Not only intellectual
              capacity, but also the person’s personal values may make for a
              better match6. Positives in giving back{" "}
            </Text>

            <Text style={styles.body}>7. Connect with nature</Text>
            <Text style={styles.paragraph}>
              a. Get outside and connect with nature in some way: going for a
              walk, a hike, a bike ride, a stroll, through a park, by a lake
              (not through it unless in a canoe), up a hillside.{" "}
            </Text>

            <Text style={styles.resources}>
              Resources: Counseling Center; Disability Services; Diversity and
              Equity, Office of; Student Activities/ Leadership Development
              (SA/LD); Wellness Education
            </Text>
          </View>
        );
      } else if (wellnessFactor === "Occupational") {
        return (
          <View key={wellnessFactor} style={styles.Occupationalbackground}>
            <Text style={styles.header}>Occupational</Text>
            <Text style={styles.description}>
              To have personal fulfillment from our jobs or our endeavors while
              still maintaining balance in our lives. It is a desire to
              attribute meaning to our endeavors, making a positive impact on
              the organizations we engage in.{" "}
            </Text>
            <Text style={styles.option}>Here Are Some Videos:</Text>
            <Text
              style={styles.body}
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=xSYf8I7j0Cw")
              }
            >
              National Wellness Week: Focus on Occupational Wellness!
            </Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=xSYf8I7j0Cw")
              }
            >
              https://www.youtube.com/watch?v=xSYf8I7j0Cw"
            </Text>
            <Text style={styles.option}>Here Are Some Tips:</Text>
            <Text style={styles.body}>1. Clubs and intramurals</Text>
            <Text style={styles.paragraph}>
              a. We have so many clubs and intramurals every semester or every
              year try something new.{" "}
            </Text>

            <Text style={styles.body}>
              2. Arts & crafts club and Wellness Education community hours
            </Text>
            <Text style={styles.paragraph}>
              a. Get involved in arts and crafts while socializing. Sometimes
              when we are worried about being in a social situation, it is best
              to have an activity to occupy our hands while we think about what
              to say.{" "}
            </Text>

            <Text style={styles.body}>
              3. Suggest a weekend activity through CAN/SGA{" "}
            </Text>
            <Text style={styles.paragraph}>
              a. Go to the next meeting of CAN or SGA and suggest your activity.
              We are always looking for things to do on the weekend, so why not
              your thing?{" "}
            </Text>

            <Text style={styles.body}>4. Take a photography/ art class</Text>
            <Text style={styles.paragraph}>
              See if you like it or just like learning about it.{" "}
            </Text>

            <Text style={styles.body}>
              5. Spend time with friends writing reviews
            </Text>
            <Text style={styles.paragraph}>
              a. Socialize while creating reviews of sports, restaurants,
              movies, presentations, so you can share them through classes,
              clubs or the recorder.{" "}
            </Text>

            <Text style={styles.body}>6. Exploring likes and dislikes</Text>
            <Text style={styles.paragraph}>
              a. make a journal that includes your likes and dislikes. Then when
              out try something different.{" "}
            </Text>

            <Text style={styles.resources}>
              Resources:Athletics; Diversity and Equity, Office of; RECentral;
              Student Activities/ Leadership Development (SA/LD); Student Clubs
              and Organizations; Today@CCSU; Wellness Education
            </Text>
          </View>
        );
      }

      console.log("factor", wellnessFactor); // wellnessFactor is factor name
      console.log("factorValueProperty", wellnessFactorRating); //wellnessFactorRating shows number value of rating
    });
  };

  return (
    <ScrollView>
      <View style={styles.Occupationalbackground}>
        <Text style={styles.header}>8 Factors of Wellness</Text>
        <Text style={styles.option}>Here Are Some Videos:</Text>
        <Text
          style={styles.body}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/watch?v=2NR4_5dt7JA&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=1"
            )
          }
        >
          The Eight Dimensions of Wellness
        </Text>
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/watch?v=2NR4_5dt7JA&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=1"
            )
          }
        >
          https://www.youtube.com/watch?v=2NR4_5dt7JA&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=1
        </Text>
        <Text
          style={styles.body}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/watch?v=4ju2G3KtKNA&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=17"
            )
          }
        >
          AHS: Ways to Wellness
        </Text>
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/watch?v=4ju2G3KtKNA&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=17"
            )
          }
        >
          https://www.youtube.com/watch?v=4ju2G3KtKNA&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=17
        </Text>
      </View>
      {showValues()}
      <AppButton
        style={styles.buttonsContainer}
        title="Logout"
        onPress={() => navigation.navigate("Login")}
      />
    </ScrollView>
  );
};

export default Resources;

const styles = StyleSheet.create({
  header: {
    paddingBottom: 10,
    paddingTop: 25,
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    paddingBottom: 15,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  paragraph: {
    padding: 15,
    color: "black",
    fontSize: 16,
    textAlign: "left",
  },
  option: {
    padding: 5,
    paddingLeft: 15,
    fontSize: 18,
    color: "white",
    textDecorationLine: "underline",
    textAlign: "left",
    fontWeight: "bold",
  },
  resources: {
    paddingTop: 15,
    paddingBottom: 25,
    color: "black",
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  body: {
    paddingLeft: 20,
    color: "white",

    fontSize: 18,
    textAlign: "left",
    justifyContent: "center",
  },
  link: {
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 20,
    color: "black",
    fontSize: 16,
    textDecorationLine: "underline",
    fontStyle: "italic",
    textAlign: "left",
  },
  Financialbackground: {
    backgroundColor: "#ffb142",
  },
  Enviornmentalbackground: {
    backgroundColor: "#6ab04c",
  },
  Socialbackground: {
    backgroundColor: "#ffb8b8",
  },
  Physicalbackground: {
    backgroundColor: "#b33939",
  },
  Intellectualbackground: {
    backgroundColor: "#079992",
  },
  Emotionalbackground: {
    backgroundColor: "#c56cf0",
  },
  Spiritualbackground: {
    backgroundColor: "#ffdd59",
  },
  Occupationalbackground: {
    backgroundColor: "#1e3799",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
