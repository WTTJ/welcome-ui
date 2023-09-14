
# Overview

---

# Sources of truth

---

# Definition

Buttons are clickable items communicating actions that can be performed.

## Principles

  
| Column 1 | Column 2 | Column 3 |  
| --- | --- | --- |  
| ![Img](https://studio-assets.supernova.io/design-systems/81732/58a8711f-0338-4ac6-b3c7-4cf4fb1fd51d.png) | ![Img](https://studio-assets.supernova.io/design-systems/81732/e62cb994-12a0-4ed4-89f9-2ff986be1d75.png) | ![Img](https://studio-assets.supernova.io/design-systems/81732/b1677abe-2521-441d-b17a-fa37380dc437.png) |  
| *Noticeable* | *Identifiable* | *Defined* |  
| Should be easily spottable among other elements. | Should make it clear that it can trigger an action. | Should clearly state what action it triggers. |  


---

# *Anatomy*

![Img](https://studio-assets.supernova.io/design-systems/81732/bc33f3ec-0fc2-41d5-9e67-e2a5cab277ed.png)

A button comprises a label in a container that can also display an icon, an arrow or both.

- *Label
*Concise wording that will trigger a related action.

- *Icon* _(optional)**_ 
Pictogram that can dress the button and further explain the label. Can either be left-aligned or right-aligned.

- *Arrow* _(optional)**_ 
Pictogram that indicates a dropdown. By default the arrow points down. When the dropdown is open, the arrow points up.

- *Container* 
Background of the component that can either be filled, outlined or null.

## Informative icons

Adding an icon is optional but it should always be kept to a single one per button.

  
![do - 1 icon](https://studio-assets.supernova.io/design-systems/81732/9ab5c63c-acba-4704-b75d-86f571bc0446.png)  
do - 1 icon  


> Yay:  
> *DO
*Keep a single icon.

  
![fsdfsdf](https://studio-assets.supernova.io/design-systems/81732/274063d6-b8f3-4555-9054-f25db39ac1a5.png)  
fsdfsdf, fsdfsdfsd  
  


> Please note:  
> *DON'T 
*Fit more than one icon at a time on each side.

---

# Guidelines

## *Hierarchy*

Levels are used to differentiate the importance of buttons in a layout. By definition it should always be highlighting a primary action with other buttons having less importance in the hierarchy. Each time there is several buttons side by side, place them from left to right in order of importance (from important to less important).

  
![Primary](https://studio-assets.supernova.io/design-systems/81732/1b0435aa-2c09-4217-80a7-8a951eed1485.png)  
Primary, Puts emphasis on the most important action that the user should notice to trigger another step or a validation.  
  
![Secondary](https://studio-assets.supernova.io/design-systems/81732/3b4d5b80-8468-43a3-8611-f0f2cdb3e610.png)  
Secondary, For less important actions that usually sit aside a primary button.  
  
![Tertiary](https://studio-assets.supernova.io/design-systems/81732/ab82189c-e8c8-423a-8b28-73f2a72c5700.png)  
Tertiary, Used for everything that is not directly related to the ongoing flow.  
  
![Ghost](https://studio-assets.supernova.io/design-systems/81732/7554f809-d1a9-421f-9615-be89ca47efda.png)  
Ghost, Doesn’t have a container visible by default which doesn't distract the user from nearby content.  
  


### Side by side

Never include two of the same level button in the same context. Decide which action most users should perform.

  
![do - different](https://studio-assets.supernova.io/design-systems/81732/1df5a7cb-513a-4ea1-bbb3-60b975f5c8e6.png)  
do - different  


> Yay:  
> *DO
*Differentiate two buttons next to each other to structure the importance of the actions.

  
![don't - same](https://studio-assets.supernova.io/design-systems/81732/c50bc7c5-cbde-42fb-8871-65b4ad62b7fc.png)  
don't - same  


> Please note:  
> *DON'T 
*Use the same buttons side by side. It creates confusion and user cannot interpret what action we value the most.

### Modal closing level

Modal buttons are always a ghost button.

  
![do - ghost](https://studio-assets.supernova.io/design-systems/81732/4e0fb824-5ce0-4ea2-843d-d13ee3ddd673.png)  
do - ghost  


> Yay:  
> *DO
*Pick a ghost button.

  
![don't - others](https://studio-assets.supernova.io/design-systems/81732/821fe599-d882-4cf7-b39e-9b08ceb9a311.png)  
don't - others  


> Please note:  
> *DON'T 
*Use any other level.

---

## Size and spacing

### Size

Our buttons come in 4 different sizes. As a rule of thumb:

- `X-Small` is rarely used and is slotted in tight containers or bottom navigations.

- `Small` is mainly used in contexts where the button isn't a big focus and the space is rather tight.

- `Medium` is the default button used across our products.

- `Large` is rarely used and is often alone to draw the focus of the user (on a cover for instance).

The width is always adaptative to its content while the height remains fixed.

  
![sizes](https://studio-assets.supernova.io/design-systems/81732/c4d1c673-6875-4b26-b881-2031b282da26.png)  
sizes  


*Consistency*

If you want to highlight an action over another one, levels will do the job, size should never serve that purpose.

  
![do - same](https://studio-assets.supernova.io/design-systems/81732/287ed110-6ff1-436e-be27-4e7c433d2781.png)  
do - same  


> Yay:  
> *DO
*Keep one size across your layout. It preserves coherence and doesn't confuse the user.

  
![don't - different](https://studio-assets.supernova.io/design-systems/81732/8a177c37-0704-4b97-acb7-0a175a30cdae.png)  
don't - different  


> Please note:  
> *DON'T 
*Mix sizes together. It makes things unbalanced and unsightly.

### Padding

Paddings between label and icons is:

- `4px` for `x-small` and `small`

- `8px` for `medium` and `large`

An icon and a label are considered as a group so in case of a full width button, they'll be aligned left while the arrow will always be fixated on the right.

  
![paddings](https://studio-assets.supernova.io/design-systems/81732/9142d0fa-582b-49d8-af4c-8bf4815028a3.png)  
paddings  


### Margin

Margins between 2 buttons are:

- `8px` for `x-small` and `small`

- `12px` for `medium` and `large`

### *Properties table*

  
| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |  
| --- | --- | --- | --- | --- | --- | --- |  
| Size | Body | Padding T + B | Padding L + R | Height | Icon size | Margins |  
| `xs` | XS | 4px | 8px | 24px | 12px | 8px |  
| `sm` | XS | 8px | 12px | 32px | 16px | 8px |  
| `md` | S | 8px | 16px | 40px | 16px | 12px |  
| `lg` | M | 12px | 24px | 48px | 16px | 12px |  


---

## States

When a user interacts with a button its state changes to communicate information.

  
![Default](https://studio-assets.supernova.io/design-systems/81732/b998dcd5-aff8-459b-8742-7465ac76f608.png)  
Default, Initial view of a button that hasn't been interacted with.  
  
![Hover](https://studio-assets.supernova.io/design-systems/81732/0cc7790e-5392-489d-ad51-db819db21a20.png)  
Hover, Signals availability and the step before triggering an action. Takes a lighter shade.  
  
![Active](https://studio-assets.supernova.io/design-systems/81732/17d57123-8c66-43bd-a50c-e2d52f9f1de8.png)  
Active, Indicates which button is in focus and selected by the user.  
  
![Disabled](https://studio-assets.supernova.io/design-systems/81732/bfe5fd58-1bc4-40b2-8f03-ab64ffa52e6e.png)  
Disabled, Button with which a user cannot interact with. Greyed out label and container.  
  


---

## Colour

### Global

  
| Column 1 | Column 2 | Column 3 | Column 4 |  
| --- | --- | --- | --- |  
| Level | Background | Text | Outline |  
| Primary | #FFCD00 | #000000 | Null |  
| Disabled | #D6D2CC | #8F8C88 | Null |  


### Light theme

  
| Column 1 | Column 2 | Column 3 | Column 4 |  
| --- | --- | --- | --- |  
| Secondary | #000000 | #FFFFFF | Null |  
| Tertiary | Null | #000000 | #000000 |  
| Quaternary | Null | #000000 | Null |  


### Dark theme

  
| Column 1 | Column 2 | Column 3 | Column 4 |  
| --- | --- | --- | --- |  
| Secondary | #FFFFFF | #000000 | Null |  
| Tertiary | Null | #FFFFFF | #FFFFFF |  
| Quaternary | Null | #FFFFFF | Null |  


---

## Themes

Our products are light-themed by default with a few exceptions, like Welcome Originals, so buttons can be themed differently depending on light or dark theme.

### *Primary* 

Consistent throughout different themes putting an emphasis on Welcome's primary colour.

  
![primary](https://studio-assets.supernova.io/design-systems/81732/85106ea5-0752-4def-93e3-6d28a8c42766.png)  
primary  


### *Secondary, Tertiary and Ghost* 

They all have alternate versions for dark-themed products. Dark-themed versions are referred as negatives.

  
![secondary, tertiary, ghost](https://studio-assets.supernova.io/design-systems/81732/931d6901-014c-4b26-bd76-796a2589a803.png)  
secondary, tertiary, ghost  


---

## Shape

We have both options in terms of corners, to put it simply:

- *Text buttons* 
Strict no rounded corners policy.

- *Icons* 
Square or circle.

*Text buttons corners* Text buttons should always be left with square corners.

### Text buttons corners

Text buttons should always be left with square corners.

  
![do - no rounding](https://studio-assets.supernova.io/design-systems/81732/543746a7-fc09-4c36-bee2-ae7313ecafe8.png)  
do - no rounding  


> Yay:  
> *DO
*Keep corners untouched and squared.

  
![don't - round](https://studio-assets.supernova.io/design-systems/81732/69eb58bb-9e03-4136-8b42-200ac846a4a2.png)  
don't - round  


> Please note:  
> *DON'T 
*Round corners, neither slightly nor fully.

### Icon buttons corners

Icon buttons are exceptions and can either be square or fully rounded (circle).

  
![do - square or circle](https://studio-assets.supernova.io/design-systems/81732/ef710453-a737-471a-b787-e52fd53debf1.png)  
do - square or circle  


> Yay:  
> *DO
*Pick between square or circle shape.

  
![don't - rounded](https://studio-assets.supernova.io/design-systems/81732/6c67a88a-abf9-470d-862a-a210f6c70039.png)  
don't - rounded  


> Please note:  
> *DON'T 
*Round corners if it's not 100%.

### Modal closing shape

Modal buttons are always a circle icon button.

  
![do - circle icon](https://studio-assets.supernova.io/design-systems/81732/77053093-f3df-41bc-9e6f-55aa938b99e7.png)  
do - circle icon  


> Yay:  
> *DO
*Pick a circle button.

  
![don't - square icon](https://studio-assets.supernova.io/design-systems/81732/c84e0805-719e-4165-a887-794d17e93cf0.png)  
don't - square icon  


> Please note:  
> *DON'T 
*Use a square button.

---