# test-user-creation

Formulaire test de création de compte utilisateur.

## Commentaires

- Pour ce formulaire je me suis basé sur les styles Boostrap.

- Comme aucun prérequis de process de validation de saisie n’était spécifié (volontairement j’imagine afin que le candidat puisse librement faire son choix et l’expliquer) dans le but de ne pas " réinventer la roue " et de suivre des bonnes pratiques bien documentées j’ai privilégié un process de validation JavaScript avec la bibliothèque parsley.js (http://parsleyjs.org/) qui présente l'avantage de procéder à des validations JavaScript en fonction des attribut HTML5 des champs à valider et d'assurer une compatibilité avec les anciennes versions des navigateurs qui ne sont pas compatibles avec L'API HTML5.

- Concernant le champ code postal je l'ai limité à une saisie numérique à l'aide de la bibliothèque cleave.js. Je n'ai pas mis en place de masque de saisie plus avancé car j'ai proposé aux utilisateurs une liste « exhaustive » de pays. La mise en place de masques de saisie pour l’ensemble des pays dépasserait certainement le cadre du test. Mais si vous le souhaitez je peux créer une nouvelle version du formulaire avec une liste de sélection de pays limitée à quelques pays et mettre en place des masques de saisie avec une validation plus avancée.

- J’ai hésité à ajouter un 2ème champ de validation de l’adresse email mais ce type de double validation d'email étant de moins en moins utilisée afin d’alléger les process de création de compte j’ai estimé dans le but de ne pas alourdir le formulaire qu’un seul champ email suffisait. J’espère avoir vu juste ;-)

- Concernant la validation du numéro de téléphone, même problématique que pour le champ code postal, la liste de sélection de pays exhaustive imposerait la mise en place de nombreux masques de saisie. J’ai donc comme spécifié utilisé la librairie cleave.js pour formater la nomenclature du numéro de téléphone en fonction du pays sélectionné dans la liste et ajouté une vérification pour s'assurer que le champ n’est pas vide lors de l’envoi du formulaire. En revanche aucune vérification plus avancée par masque de saisie n’est effectuée. Comme pour le champ code postal, je me tiens à votre disposition si vous le souhaitez pour créer une nouvelle version du formulaire avec une liste de sélection de pays limitée à quelques pays et mettre en place des masques de saisie avec une validation plus avancée.

 - Je n'ai volontairement pas commenté mon code car généralement les sociétés avec lesquelles je collabore préfèrent un code épuré, sans commentaire et privilégient l’ajout d’informations et d’aide dans les commentaires des commit. Je ne sais pas quelle est votre « politique » sur ce sujet et suis curieux d’échanger avec vous à ce propos ;-)
 
- Bien évidement il faudrait coupler cette vérification Front-End très appréciable pour l’utilisateur par une 2ème validation Back-End afin d’assurer une bonne fiabilité du process de validation ;-)