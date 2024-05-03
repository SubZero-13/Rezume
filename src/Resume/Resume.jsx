import React, { useContext } from "react";
import { createTw } from "react-pdf-tailwind";
import { ResumeData } from "../contexts/ResumeData";
import {
  Text,
  Document,
  Page,
  View,
  PDFViewer,
  StyleSheet,
  Link,
  Font,
  Svg,
  Line,
} from "@react-pdf/renderer";

const Resume = () => {
  const { resume } = useContext(ResumeData);
  Font.register({
    family: "PTserif",
    fonts: [
      {
        src: "/fonts/PTSerif-Regular.ttf",
        fontWeight: 400,
      },
      {
        src: "/fonts/PTSerif-Bold.ttf",
        fontWeight: 700,
      },
      {
        src: "/fonts/PTSerif-Italic.ttf",
        fontWeight: "normal",
        fontStyle: "italic",
      },
    ],
  });
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      padding: "20px",
      fontFamily: "PTserif",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "15px",
    },
    name: {
      fontWeight: "700",
      fontSize: "25px",
    },
    headerArea: {
      fontSize: "10px",
    },
    link: {
      color: "black",
    },
    heading: {
      fontWeight: "400",
      fontSize: "13px",
      marginBottom: "2px",
    },
    sections: {
      marginLeft: "15px",
      marginRight: "15px",
    },
    section: {
      marginBottom: "5px",
    },
    innerHead: {
      padding: "2px 10px 1px 10px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    innerHead1: {
      fontSize: "10px",
      fontWeight: "800",
    },
    innerHead2: {
      fontSize: "10px",
      fontStyle: "italic",
    },
    point: {
      display: "flex",
      flexDirection: "row",
      fontSize: "9px",
      padding: "2px 20px",
      gap: "5px",
      alignContent: "left",
      width: "500px",
    },
    projectTitle: {
      display: "flex",
      flexDirection: "row",
    },
    skill: {
      display: "flex",
      flexDirection: "row",
      padding: "2px 10px 1px 10px",
    },
    pointsArea: {
      marginTop: "5px",
    },
    AcheivementPoint: {
      display: "flex",
      flexDirection: "row",
      fontSize: "10px",
      padding: "2px 10px 1px 10px",
      gap: "5px",
      alignContent: "left",
      width: "500px",
    },
  });
  return (
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          {/* Education Section */}
          <View style={styles.header}>
            <Text style={styles.name}>
              {resume.personal.firstName + " " + resume.personal.lastName}
            </Text>
            <Text style={styles.headerArea}>
              {resume.personal.phone + " "}|{" " + resume.personal.email + " "}
              {"|" + " "}
              <Link style={styles.link} src={resume.personal.linkedin}>
                linkedin
              </Link>{" "}
              {"|" + " "}
              <Link style={styles.link} src={resume.personal.github}>
                github
              </Link>
            </Text>
          </View>
          <View style={styles.sections}>
            <Text style={styles.heading}>Education</Text>
            <Svg height="2" width="530">
              <Line
                x1="900"
                y1="0"
                x2="0"
                y2="0"
                strokeWidth={1}
                stroke="black"
              />
            </Svg>
            <View style={styles.section}>
              <View style={styles.innerHead}>
                <Text style={styles.innerHead1}>
                  {resume.education.college}
                </Text>
                <Text style={styles.innerHead2}>{}</Text>
              </View>
              <View style={styles.innerHead}>
                <Text style={styles.innerHead2}>{resume.education.title}</Text>
                <Text style={styles.innerHead2}>
                  {resume.education.startDate} {"-"} {resume.education.endDate}
                </Text>
              </View>
            </View>
          </View>

          {/* Experience section */}
          <View style={styles.sections}>
            <Text style={styles.heading}>Experience</Text>
            <Svg height="2" width="530">
              <Line
                x1="900"
                y1="0"
                x2="0"
                y2="0"
                strokeWidth={1}
                stroke="black"
              />
            </Svg>
            <View style={styles.section}>
              <View style={styles.innerHead}>
                <Text style={styles.innerHead1}>
                  {resume.experience.designation}
                </Text>
                <Text style={styles.innerHead2}>
                  {resume.experience.startDate} {"-"}{" "}
                  {resume.experience.endDate}
                </Text>
              </View>
              <View style={styles.innerHead}>
                <Text style={styles.innerHead2}>
                  {resume.experience.company}
                </Text>
                <Text style={styles.innerHead2}>
                  {resume.experience.location}
                </Text>
              </View>
              <View style={styles.points}>
                <View style={styles.point}>
                  <Text>•</Text>
                  <Text>{resume.experience.details}</Text>
                </View>
                <View style={styles.point}>
                  <Text>•</Text>
                  <Text>{resume.experience.details}</Text>
                </View>
                <View style={styles.point}>
                  <Text>•</Text>
                  <Text>{resume.experience.details}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Projects Section */}
          <View style={styles.sections}>
            <Text style={styles.heading}>Projects</Text>
            <Svg height="2" width="530">
              <Line
                x1="900"
                y1="0"
                x2="0"
                y2="0"
                strokeWidth={1}
                stroke="black"
              />
            </Svg>
            <View style={styles.section}>
              <View style={styles.innerHead}>
                <View style={styles.projectTitle}>
                  <Text style={styles.innerHead1}>
                    {resume.project.title + "  "}
                  </Text>
                  <Text style={styles.innerHead2}>
                    {"|" + "  "}
                    {resume.project.techStacks + "  "}
                  </Text>
                  <Text style={styles.innerHead2}>
                    {"|" + "  "}
                    {resume.project.githubLink && (
                      <Link style={styles.link} src={resume.project.githubLink}>
                        Source Code
                      </Link>
                    )}
                  </Text>
                </View>
                <Text style={styles.innerHead2}>
                  {resume.project.deployedLink && (
                    <Link style={styles.link} src={resume.project.deployedLink}>
                      Deployed Link
                    </Link>
                  )}
                </Text>
              </View>

              <View style={styles.points}>
                <View style={styles.point}>
                  <Text>•</Text>
                  <Text>{resume.experience.details}</Text>
                </View>
                <View style={styles.point}>
                  <Text>•</Text>
                  <Text>{resume.experience.details}</Text>
                </View>
                <View style={styles.point}>
                  <Text>•</Text>
                  <Text>{resume.experience.details}</Text>
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.innerHead}>
                <View style={styles.projectTitle}>
                  <Text style={styles.innerHead1}>
                    {resume.project.title + "  "}
                  </Text>
                  <Text style={styles.innerHead2}>
                    {"|" + "  "}
                    {resume.project.techStacks + "  "}
                  </Text>
                  <Text style={styles.innerHead2}>
                    {"|" + "  "}
                    {resume.project.githubLink && (
                      <Link style={styles.link} src={resume.project.githubLink}>
                        Source Code
                      </Link>
                    )}
                  </Text>
                </View>
                <Text style={styles.innerHead2}>
                  {resume.project.deployedLink && (
                    <Link style={styles.link} src={resume.project.deployedLink}>
                      Deployed Link
                    </Link>
                  )}
                </Text>
              </View>

              <View style={styles.points}>
                <View style={styles.point}>
                  <Text>•</Text>
                  <Text>{resume.experience.details}</Text>
                </View>
                <View style={styles.point}>
                  <Text>•</Text>
                  <Text>{resume.experience.details}</Text>
                </View>
                <View style={styles.point}>
                  <Text>•</Text>
                  <Text>{resume.experience.details}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* skills Section */}
          <View style={styles.sections}>
            <Text style={styles.heading}>Technical Skills</Text>
            <Svg height="2" width="530">
              <Line
                x1="900"
                y1="0"
                x2="0"
                y2="0"
                strokeWidth={1}
                stroke="black"
              />
            </Svg>
            <View style={styles.section}>
              <View style={styles.skill}>
                <Text style={styles.innerHead1}>Languages: </Text>
                <Text style={styles.innerHead2}>{resume.skills.languages}</Text>
              </View>
              <View style={styles.skill}>
                <Text style={styles.innerHead1}>Frameworks: </Text>
                <Text style={styles.innerHead2}>
                  {resume.skills.frameworks}
                </Text>
              </View>
              <View style={styles.skill}>
                <Text style={styles.innerHead1}>Tools: </Text>
                <Text style={styles.innerHead2}>{resume.skills.tools}</Text>
              </View>
              <View style={styles.skill}>
                <Text style={styles.innerHead1}>Database: </Text>
                <Text style={styles.innerHead2}>{resume.skills.database}</Text>
              </View>
            </View>
          </View>

          {/* Acheivements Section */}
          <View style={styles.sections}>
            <Text style={styles.heading}>Acheivements</Text>
            <Svg height="2" width="530">
              <Line
                x1="900"
                y1="0"
                x2="0"
                y2="0"
                strokeWidth={1}
                stroke="black"
              />
            </Svg>
            <View style={styles.section}>
              <View style={styles.pointsArea}>
                <View style={styles.AcheivementPoint}>
                  <Text>•</Text>
                  <Text>{resume.acheivement.acheivement1}</Text>
                </View>
                <View style={styles.AcheivementPoint}>
                  <Text>•</Text>
                  <Text>{resume.acheivement.acheivement2}</Text>
                </View>
                <View style={styles.AcheivementPoint}>
                  <Text>•</Text>
                  <Text>{resume.acheivement.acheivement3}</Text>
                </View>
                <View style={styles.AcheivementPoint}>
                  <Text>•</Text>
                  <Text>{resume.acheivement.acheivement4}</Text>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Resume;
