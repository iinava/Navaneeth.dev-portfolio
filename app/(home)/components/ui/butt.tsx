// ContactButton.tsx
import React from "react";

import Link from "next/link";
import Title from "../Title";


const ContactButton: React.FC = () => {
    return (
      <Link href="mailto:i.navaneeth0@gmail.com">
        <div>
          <Title text="Contact me 🏎️" className="inline-block" />
        </div>
      </Link>
    );
  };
  
  export default ContactButton;