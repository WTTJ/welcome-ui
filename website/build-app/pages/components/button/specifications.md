
# Specifications

---

## *Anatomy*

![Img](https://studio-assets.supernova.io/design-systems/81732/6c0b46d8-2b32-41b9-b634-74846a47f7a7.png)

A button comprises a label in a container that can also display an icon, an arrow or both.

- *Label
*Concise wording that will trigger a related action.

- *Icon* _(optional)**_ 
Pictogram that can dress the button and further explain the label. Can either be left-aligned or right-aligned.

- *Arrow* _(optional)**_ 
Pictogram that indicates a dropdown. By default the arrow points down. When the dropdown is open, the arrow points up.

- *Container* 
Background of the component that can either be filled, outlined or null.

### Informative icons

Adding an icon is optional but it should always be kept to a single one per button.

  
**Do**  
  
![do - 1 icon](https://studio-assets.supernova.io/design-systems/81732/79a4ee03-6345-4338-8a1b-24a453985772.png)  
do - 1 icon  
  
> Yay:  
> *DO
*Keep a single icon.  
  
**Don't**  
  
![fsdfsdf](https://studio-assets.supernova.io/design-systems/81732/e0703f2e-19c7-473b-9e6f-790f103aa110.png)  
fsdfsdf, fsdfsdfsd  
  
  
> Please note:  
> *DON'T 
*Fit more than one icon at a time on each side.  


## *Hierarchy*

Levels are used to differentiate the importance of buttons in a layout. By definition it should always be highlighting a primary action with other buttons having less importance in the hierarchy. Each time there is several buttons side by side, place them from left to right in order of importance (from important to less important).

  
![Primary](https://studio-assets.supernova.io/design-systems/81732/b5a95507-2fe5-4054-9aae-ce07d91955c8.png)  
Primary, Puts emphasis on the most important action that the user should notice to trigger another step or a validation.  
  
![Secondary](https://studio-assets.supernova.io/design-systems/81732/6a418f8d-3ac7-45c5-9df0-dea5c10444f0.png)  
Secondary, For less important actions that usually sit aside a primary button.  
  
![Tertiary](https://studio-assets.supernova.io/design-systems/81732/c3ad4b4e-ebe2-4260-9429-63d2931a25a5.png)  
Tertiary, Used for everything that is not directly related to the ongoing flow.  
  
![Ghost](https://studio-assets.supernova.io/design-systems/81732/0aa53b0e-1b67-475b-b3f6-d4162c5f5205.png)  
Ghost, Doesn’t have a container visible by default which doesn't distract the user from nearby content.  
  


### Side by side

Never include two of the same level button in the same context. Decide which action most users should perform.

  
**Do**  
  
![do - different](https://studio-assets.supernova.io/design-systems/81732/1aef047a-a9c1-469d-80db-300146387ffc.png)  
do - different  
  
> Yay:  
> *DO
*Differentiate two buttons next to each other to structure the importance of the actions.  
  
**Don't**  
  
![don't - same](https://studio-assets.supernova.io/design-systems/81732/d30dd31b-dcbd-4a0d-b56e-47d4ec044fcb.png)  
don't - same  
  
> Please note:  
> *DON'T 
*Use the same buttons side by side. It creates confusion and user cannot interpret what action we value the most.  


### Modal closing level

Modal buttons are always a ghost button.

  
**Do**  
  
![do - ghost](https://studio-assets.supernova.io/design-systems/81732/ad1edb04-f5b2-435c-b14e-4887dad4a6c8.png)  
do - ghost  
  
> Yay:  
> *DO
*Pick a ghost button.  
  
**Don't**  
  
![don't - others](https://studio-assets.supernova.io/design-systems/81732/29cfc4c6-1c9c-49a3-9a75-13c611d46bae.png)  
don't - others  
  
> Please note:  
> *DON'T 
*Use any other level.  


## Size and spacing

### Size

Our buttons come in 4 different sizes. As a rule of thumb:

- `X-Small` is rarely used and is slotted in tight containers or bottom navigations.

- `Small` is mainly used in contexts where the button isn't a big focus and the space is rather tight.

- `Medium` is the default button used across our products.

- `Large` is rarely used and is often alone to draw the focus of the user (on a cover for instance).

The width is always adaptative to its content while the height remains fixed.

  
![sizes](https://studio-assets.supernova.io/design-systems/81732/02af6c3e-2f1b-4d40-b95a-c43ca7f52665.png)  
sizes  


*Consistency*

If you want to highlight an action over another one, levels will do the job, size should never serve that purpose.

  
**Do**  
  
![do - same](https://studio-assets.supernova.io/design-systems/81732/1aed4e88-704c-40d3-a9f3-c8db0b19298c.png)  
do - same  
  
> Yay:  
> *DO
*Keep one size across your layout. It preserves coherence and doesn't confuse the user.  
  
**Don't**  
  
![don't - different](https://studio-assets.supernova.io/design-systems/81732/9e8cba67-7965-465e-9f21-a8efdd721533.png)  
don't - different  
  
> Please note:  
> *DON'T 
*Mix sizes together. It makes things unbalanced and unsightly.  


### Padding

Paddings between label and icons is:

- `4px` for `x-small` and `small`

- `8px` for `medium` and `large`

An icon and a label are considered as a group so in case of a full width button, they'll be aligned left while the arrow will always be fixated on the right.

  
![paddings](https://studio-assets.supernova.io/design-systems/81732/7778ea8c-f9bc-4208-ab7f-a444d7da6217.png)  
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

  
![Default](https://studio-assets.supernova.io/design-systems/81732/e9aa183c-5a7f-4821-8e70-11ac0cdb57f9.png)  
Default, Initial view of a button that hasn't been interacted with.  
  
![Hover](https://studio-assets.supernova.io/design-systems/81732/5da84120-fd5d-4520-9691-91da1b112231.png)  
Hover, Signals availability and the step before triggering an action. Takes a lighter shade.  
  
![Active](https://studio-assets.supernova.io/design-systems/81732/07289fea-f43b-468a-b216-39891293db48.png)  
Active, Indicates which button is in focus and selected by the user.  
  
![Disabled](https://studio-assets.supernova.io/design-systems/81732/4b3e3fc1-4886-48b3-af84-ed02521bdc23.png)  
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

  
![primary](https://studio-assets.supernova.io/design-systems/81732/ddcc7885-ca93-4f05-8e3d-d3616a664962.png)  
primary  


### *Secondary, Tertiary and Ghost* 

They all have alternate versions for dark-themed products. Dark-themed versions are referred as negatives.

  
![secondary, tertiary, ghost](https://studio-assets.supernova.io/design-systems/81732/f51b6082-02bf-4c1e-aa36-f8b63b1bcd96.png)  
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

  
**Do**  
  
![do - no rounding](https://studio-assets.supernova.io/design-systems/81732/ef4a59cf-24de-4b1b-9225-10c515daacc9.png)  
do - no rounding  
  
> Yay:  
> *DO
*Keep corners untouched and squared.  
  
**Don't**  
  
![don't - round](https://studio-assets.supernova.io/design-systems/81732/378eff6c-11fe-466e-800c-242d6706ec96.png)  
don't - round  
  
> Please note:  
> *DON'T 
*Round corners, neither slightly nor fully.  


### Icon buttons corners

Icon buttons are exceptions and can either be square or fully rounded (circle).

  
**Do**  
  
![do - square or circle](https://studio-assets.supernova.io/design-systems/81732/9f958bc4-9bf5-4415-af4d-a93c6ebf025b.png)  
do - square or circle  
  
> Yay:  
> *DO
*Pick between square or circle shape.  
  
**Don't**  
  
![don't - rounded](https://studio-assets.supernova.io/design-systems/81732/f1d20f92-afbe-4d8c-a86e-ff314659de3e.png)  
don't - rounded  
  
> Please note:  
> *DON'T 
*Round corners if it's not 100%.  


### Modal closing shape

Modal buttons are always a circle icon button.

  
**Do**  
  
![do - circle icon](https://studio-assets.supernova.io/design-systems/81732/84307286-1968-4ddf-afa9-5850824276e1.png)  
do - circle icon  
  
> Yay:  
> *DO
*Pick a circle button.  
  
**Don't**  
  
![don't - square icon](https://studio-assets.supernova.io/design-systems/81732/ace497e6-8c2b-4902-9ad3-638c3a24bfe3.png)  
don't - square icon  
  
> Please note:  
> *DON'T 
*Use a square button.  


---