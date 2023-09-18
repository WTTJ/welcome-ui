
# Overview

---

# Sources of truth

---

# Definition

Buttons are clickable items communicating actions that can be performed.

## Principles

  
| Column 1 | Column 2 | Column 3 |  
| --- | --- | --- |  
| ![Img](https://studio-assets.supernova.io/design-systems/81732/98bf1cc4-3807-4aac-9a17-0a98b838e7dd.png) | ![Img](https://studio-assets.supernova.io/design-systems/81732/86b1ee1b-7b59-40ed-a7b2-08e04d025de1.png) | ![Img](https://studio-assets.supernova.io/design-systems/81732/25d0a795-eb66-4049-a047-99f2f5704210.png) |  
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

  
![do - 1 icon](https://studio-assets.supernova.io/design-systems/81732/a7beb0c1-aaf1-457d-b3d0-55f50bc8afdb.png)  
do - 1 icon  


> Yay:  
> *DO
*Keep a single icon.

  
![fsdfsdf](https://studio-assets.supernova.io/design-systems/81732/7014fe92-9434-4b26-8526-ddf4be998e93.png)  
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

  
![do - different](https://studio-assets.supernova.io/design-systems/81732/91bbbe45-9aa4-4ec4-b645-5b0268089a83.png)  
do - different  


> Yay:  
> *DO
*Differentiate two buttons next to each other to structure the importance of the actions.

  
![don't - same](https://studio-assets.supernova.io/design-systems/81732/3136aca3-eea9-4041-afaf-8f6cf50e58be.png)  
don't - same  


> Please note:  
> *DON'T 
*Use the same buttons side by side. It creates confusion and user cannot interpret what action we value the most.

### Modal closing level

Modal buttons are always a ghost button.

  
![do - ghost](https://studio-assets.supernova.io/design-systems/81732/ea6cfe5c-b244-4337-8f22-188c08511efa.png)  
do - ghost  


> Yay:  
> *DO
*Pick a ghost button.

  
![don't - others](https://studio-assets.supernova.io/design-systems/81732/6dd890d5-2268-409f-b346-5db6dffe4df7.png)  
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

  
![sizes](https://studio-assets.supernova.io/design-systems/81732/aae1bfed-928f-47db-8762-d165e6fc5296.png)  
sizes  


*Consistency*

If you want to highlight an action over another one, levels will do the job, size should never serve that purpose.

  
![do - same](https://studio-assets.supernova.io/design-systems/81732/b361ff8f-da8b-4b0a-ad59-c37f96487cd8.png)  
do - same  


> Yay:  
> *DO
*Keep one size across your layout. It preserves coherence and doesn't confuse the user.

  
![don't - different](https://studio-assets.supernova.io/design-systems/81732/32733484-6b9b-4a00-9701-7a158a6db993.png)  
don't - different  


> Please note:  
> *DON'T 
*Mix sizes together. It makes things unbalanced and unsightly.

### Padding

Paddings between label and icons is:

- `4px` for `x-small` and `small`

- `8px` for `medium` and `large`

An icon and a label are considered as a group so in case of a full width button, they'll be aligned left while the arrow will always be fixated on the right.

  
![paddings](https://studio-assets.supernova.io/design-systems/81732/a8a2a7f9-3cb2-4771-b05c-b997346c9b78.png)  
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

  
![Default](https://studio-assets.supernova.io/design-systems/81732/db6ce5dc-25c9-4dfc-a7cb-a9ed3db787b8.png)  
Default, Initial view of a button that hasn't been interacted with.  
  
![Hover](https://studio-assets.supernova.io/design-systems/81732/09cbb392-3b94-487f-a8ce-441d07846c08.png)  
Hover, Signals availability and the step before triggering an action. Takes a lighter shade.  
  
![Active](https://studio-assets.supernova.io/design-systems/81732/ba83cbaf-7b97-4a42-831f-dc78fb307ff7.png)  
Active, Indicates which button is in focus and selected by the user.  
  
![Disabled](https://studio-assets.supernova.io/design-systems/81732/86f9a279-bb55-43ff-ad1c-da94825d2967.png)  
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

  
![primary](https://studio-assets.supernova.io/design-systems/81732/0bc8624d-9180-46ae-ab3f-418579cedb70.png)  
primary  


### *Secondary, Tertiary and Ghost* 

They all have alternate versions for dark-themed products. Dark-themed versions are referred as negatives.

  
![secondary, tertiary, ghost](https://studio-assets.supernova.io/design-systems/81732/b8b7e4e5-35ce-4104-ad0a-3b22d5a59d71.png)  
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

  
![do - no rounding](https://studio-assets.supernova.io/design-systems/81732/5f574e79-923e-4da4-8b76-42a459222b92.png)  
do - no rounding  


> Yay:  
> *DO
*Keep corners untouched and squared.

  
![don't - round](https://studio-assets.supernova.io/design-systems/81732/4a9f0683-124a-439d-8172-bda54117e5de.png)  
don't - round  


> Please note:  
> *DON'T 
*Round corners, neither slightly nor fully.

### Icon buttons corners

Icon buttons are exceptions and can either be square or fully rounded (circle).

  
![do - square or circle](https://studio-assets.supernova.io/design-systems/81732/0047c73c-8b36-4d28-96f7-0336d97aa635.png)  
do - square or circle  


> Yay:  
> *DO
*Pick between square or circle shape.

  
![don't - rounded](https://studio-assets.supernova.io/design-systems/81732/69e4eec3-2786-4370-b90a-51905faec2d9.png)  
don't - rounded  


> Please note:  
> *DON'T 
*Round corners if it's not 100%.

### Modal closing shape

Modal buttons are always a circle icon button.

  
![do - circle icon](https://studio-assets.supernova.io/design-systems/81732/40bb76cd-4e78-4fa2-a8e6-837a3cc34649.png)  
do - circle icon  


> Yay:  
> *DO
*Pick a circle button.

  
![don't - square icon](https://studio-assets.supernova.io/design-systems/81732/bfeac68d-02cb-44ff-a851-ab5e2886df44.png)  
don't - square icon  


> Please note:  
> *DON'T 
*Use a square button.

---