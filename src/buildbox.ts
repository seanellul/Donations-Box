import { DonationButton1, DonationButton10, DonationButton20, DonationButton5 } from './donationsBox'


export function buildbox() {
const button1 = new DonationButton1(
  { position: new Vector3(0, 0, 0), rotation: Quaternion.Euler(0, 0, 0) },
  '0xb429d0484BC4b955FCAabB28cC84d77e0449EE80',
  1
)
engine.addEntity(button1)

const button5 = new DonationButton5(
    { position: new Vector3(0, 0, 0), rotation: Quaternion.Euler(0, 0, 0) },
    '0xb429d0484BC4b955FCAabB28cC84d77e0449EE80',
    5
  )
  engine.addEntity(button5)

  const button10 = new DonationButton10(
    { position: new Vector3(0, 0, 0), rotation: Quaternion.Euler(0, 0, 0) },
    '0xb429d0484BC4b955FCAabB28cC84d77e0449EE80',
    10
  )
  engine.addEntity(button10)

  const button20 = new DonationButton20(
    { position: new Vector3(0, 0, 0), rotation: Quaternion.Euler(0, 0, 0) },
    '0xb429d0484BC4b955FCAabB28cC84d77e0449EE80',
    20
  )
  engine.addEntity(button20)

    const donationBoxText = new Entity()
    donationBoxText.addComponent(new GLTFShape('models/JustTheTip/Comedy_CryptoBox_Text_1.glb'))
    donationBoxText.addComponent(new Transform)
    engine.addEntity(donationBoxText)


    const totalshape = new Entity()
    totalshape.addComponent(new GLTFShape('models/JustTheTip/Comedy_CryptoBox_Main_2.glb'))
    totalshape.addComponent(new Transform({
        position: new Vector3(2,0,2)
    }))

    engine.addEntity(totalshape)

    button1.setParent(totalshape)
    button10.setParent(totalshape)
    button20.setParent(totalshape)
    button5.setParent(totalshape)
    donationBoxText.setParent(totalshape)

}

