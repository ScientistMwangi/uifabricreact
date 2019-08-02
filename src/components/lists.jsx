import React, { Component } from "react";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
import {
  ActivityItem,
  css,
  classNamesFunction,
  Icon,
  IStyle,
  Link,
  DocumentCard,
  DocumentCardActivity,
  DocumentCardTitle,
  DocumentCardLogo,
  DocumentCardStatus,
  IDocumentCardLogoProps,
  IDocumentCardActivityPerson
} from "office-ui-fabric-react";

class ListComp extends Component {
  state = {};
  render() {
    const conversationTileClass = mergeStyles({ height: 182 });
    const cardStyles = {
      root: { display: "inline-block", marginRight: 20, width: 320 }
    };
    const logoProps = {
      logoIcon: "OutlookLogo"
    };
    const people = [
      { name: "Annie Lindqvist", profileImageSrc: "https://picsum.photos/200" },
      {
        name: "Roko Kolar",
        profileImageSrc: "https://picsum.photos/200",
        initials: "RK"
      },
      { name: "Aaron Reid", profileImageSrc: "https://picsum.photos/200" },
      {
        name: "Christian Bergqvist",
        profileImageSrc: "https://picsum.photos/200",
        initials: "CB"
      },
      { name: "Greta Lundberg", profileImageSrc: "https://picsum.photos/200" },
      { name: "Maor Sharitt", profileImageSrc: "https://picsum.photos/200" },
      { name: "Velatine Lourvric", profileImageSrc: "", initials: "VL" },
      { name: "Kat Larrson", profileImageSrc: "https://picsum.photos/200" }
    ];
    // const activityItemExamples = [
    //   {
    //     key: 1,
    //     activityDescription: [
    //       <Link
    //         key={1}
    //         className={css(classNames.nameText)}
    //         onClick={() => {
    //           alert("A name was clicked.");
    //         }}
    //       >
    //         Philippe Lampros
    //       </Link>,
    //       <span key={2}> commented</span>
    //     ],
    //     activityIcon: <Icon iconName={"Message"} />,
    //     comments: [
    //       <span key={1}>Hello! I am making a comment and mentioning </span>,
    //       <Link
    //         key={2}
    //         className={css(classNames.nameText)}
    //         onClick={() => {
    //           alert("An @mentioned name was clicked.");
    //         }}
    //       >
    //         @Anđela Debeljak
    //       </Link>,
    //       <span key={3}> in the text of the comment.</span>
    //     ],
    //     timeStamp: "Just now"
    //   },
    //   {
    //     key: 2,
    //     activityDescription: [
    //       <Link
    //         key={1}
    //         className={css(classNames.nameText)}
    //         onClick={() => {
    //           alert("A name was clicked.");
    //         }}
    //       >
    //         Lisha Refai
    //       </Link>,
    //       <span key={2}> deleted </span>,
    //       <span key={3} className={css(classNames.nameText)}>
    //         DocumentTitle.docx
    //       </span>
    //     ],
    //     activityIcon: <Icon iconName={"Trash"} />,
    //     timeStamp: "2 hours ago"
    //   },
    //   {
    //     key: 3,
    //     activityDescription: [
    //       <Link
    //         key={1}
    //         className={css(classNames.nameText)}
    //         onClick={() => {
    //           alert("A name was clicked.");
    //         }}
    //       >
    //         Julian Arvidsson
    //       </Link>,
    //       <span key={2}> moved </span>,
    //       <Link
    //         key={3}
    //         className={css(classNames.nameText)}
    //         onClick={() => {
    //           alert("A document was clicked.");
    //         }}
    //       >
    //         PresentationTitle.pptx
    //       </Link>,
    //       <span key={4}> to </span>,
    //       <Link
    //         key={5}
    //         className={css(classNames.nameText)}
    //         onClick={() => {
    //           alert("A folder was clicked.");
    //         }}
    //       >
    //         Destination Folder
    //       </Link>
    //     ],
    //     activityIcon: <Icon iconName={"FabricMovetoFolder"} />,
    //     timeStamp: "Yesterday"
    //   }
    // ];
    // const activityExampleList: Array<JSX.Element> = [];
    // activityItemExamples.forEach((item: { key: string | number }) => {
    //   const props = item;
    //   activityExampleList.push(
    //     <ActivityItem
    //       {...props}
    //       key={item.key}
    //       className={css(classNames.exampleRoot)}
    //     />
    //   );
    // });

    // return (
    //   <div>
    //     <h4>List Components</h4>
    //     {{
    //       key: 1,
    //       activityDescription: [
    //         <Link
    //           key={1}
    //           className={css(classNames.nameText)}
    //           onClick={() => {
    //             alert("A name was clicked.");
    //           }}
    //         >
    //           Philippe Lampros
    //         </Link>,
    //         <span key={2}> commented</span>
    //       ],
    //       activityIcon: <Icon iconName={"Message"} />,
    //       comments: [
    //         <span key={1}>Hello! I am making a comment and mentioning </span>,
    //         <Link
    //           key={2}
    //           className={css(classNames.nameText)}
    //           onClick={() => {
    //             alert("An @mentioned name was clicked.");
    //           }}
    //         >
    //           @Anđela Debeljak
    //         </Link>,
    //         <span key={3}> in the text of the comment.</span>
    //       ],
    //       timeStamp: "Just now"
    //     }}
    //   </div>
    // );

    return (
      <div>
        <h4>Document Card</h4>
        <DocumentCard styles={cardStyles} onClickHref="http://bing.com">
          <DocumentCardLogo {...logoProps} />
          <div className={conversationTileClass}>
            <DocumentCardTitle
              title="Conversation about annual report"
              shouldTruncate
            />
            <DocumentCardTitle
              title="This is the email content preview. It has a second line."
              shouldTruncate
              showAsSecondaryTitle
            />
          </div>
          <DocumentCardActivity
            activity="Sent March 13, 2018"
            people={people.slice(6)}
          />
        </DocumentCard>
      </div>
    );
  }
}

export default ListComp;
