import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <footer className="darkblue-color">
      <div className="container py-3 justify-content-evenly align-items-center mobile-content">
        <div className="row ">
          <div className="col-md-6">
            <h5>Lule Northern Lights Cinema</h5>
            <p className="mt-3">biografgatan 97</p>
            <p className="mt-3">97231 Luleå</p>
          </div>
          <div className="col-md-3">
            <h5>Kontakta oss</h5>
            <ul className="list-unstyled d-flex gap-2">
              <li>
                <Link href={"#"}>
                  <Image
                    src={"/facebook.svg"}
                    alt="facbook icon"
                    width={30}
                    height={30}
                  ></Image>
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <Image
                    src={"/instagram.svg"}
                    alt=" instagram icon"
                    width={30}
                    height={30}
                  ></Image>
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <Image
                    src={"/twitter.svg"}
                    alt="twitter icon"
                    width={30}
                    height={30}
                  ></Image>
                </Link>
              </li>
              <li>
                <Link href={"mailto:#"}>
                  <Image
                    src={"/mail.png"}
                    alt="mail icon"
                    width={30}
                    height={30}
                  ></Image>
                </Link>
              </li>
            </ul>
            <div>
              <h6>Telefon</h6>
              <Link href={"tel:555 555 555"}>555 555 555</Link>
            </div>
          </div>
          <div className="col-md-3 mt-2 ">
            <h5>Samarbete med</h5>
            <ul className="list-unstyled">
              <li>
                <Image
                  src={"/kommun-icon.svg"}
                  alt="municipality icon"
                  width={125}
                  height={60}
                ></Image>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center ">
          <p>&copy; 2023 Lule Northen Light Cinema. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
