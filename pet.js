import React from "react";

export default function pet({ name, breed, animal }) {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, name),
//     React.createElement("h2", {}, breed),
//     React.createElement("h2", {}, animal),
//   ]);

return(
 <div>
<h1>{name}</h1>
<h2>{animal}</h2>
<h2>{breed}</h2>
</div>
);

}
