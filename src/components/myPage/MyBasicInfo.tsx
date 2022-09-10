import React, { useState, useEffect } from 'react';
import {
  MyPageBasicInfo,
  MyPageBasicInfoBox,
  MyPageRepresentiveImg,
  MyPageTopBackground,
  MyPageEditIcon,
  MyPagePhotoInput,
} from 'design/myPageStyles/myPageStyles';
import { setGender } from 'utils/setGender';
import {
  faCirclePlus,
  faPen,
  faFloppyDisk,
} from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@tanstack/react-query';
import { putUserRepresentPhoto } from 'api/mypageApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { putUserNames, putUserDatas } from 'api/mypageApi';
import {
  MyIntroduceSelectBox,
  MyIntroduceOptionBox,
} from 'design/myPageStyles/myIntroduceSelfStyles';
import { loactionDataInSeoul } from 'utils/locationDataInSeoul';

type myBasicInfoProps = {
  userBasicData: {
    name: string;
    nickName: string;
    age: number;
    gender: string;
  };
  location: string;
};

const genderType = ['female', 'male'];
const ageArrage = [...new Array(80)].map((_, i) => (i + 1).toString());

function MyBasicInfo({ userBasicData, location }: myBasicInfoProps) {
  const [userImg, setUserImg] = useState(
    `${process.env.REACT_APP_SERVER_IP}/api/user/${sessionStorage.getItem(
      'userId'
    )}/img/represents`
  );
  const [editNames, setEditNames] = useState(true);
  const [userNames, setUserNames] = useState({ name: '', nickName: '' });
  const [userData, setUserData] = useState({
    age: userBasicData.age.toString(),
    location: location,
    gender: userBasicData.gender,
  });

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const mutation = useMutation(putUserRepresentPhoto, {
    onSuccess({ data }: any) {
      if (data.code == 200) {
        alert('대표 사진 수정 완료');
      } else {
        alert(data.error);
      }
    },
  });
  const editNameMutation = useMutation(putUserNames, {
    onSuccess({ data }: any) {
      if (data.code == 200) {
        alert('이름 및 닉네임 수정 완료');
      }
    },
  });

  const saveUserDatasMutation = useMutation(putUserDatas, {
    onSuccess({ data }: any) {
      if (data.code == 200) {
        alert('정보 수정 완료');
      }
    },
  });

  const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setUserImg(URL.createObjectURL(event.target.files[0]));
    //@ts-ignore
    mutation.mutate(event.target.files[0]);
  };

  const saveUserName = () => {
    editNameMutation.mutate(userNames);
    setEditNames(true);
  };

  const saveUserDatas = () => {
    saveUserDatasMutation.mutate(userData);
  };

  const onChangeNames = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNames({
      ...userNames,
      [e.target.name]: e.target.value.toString(),
    });
  };

  const onChangeDatas = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    saveUserDatas();
  };

  return (
    <>
      <MyPageTopBackground>
        <form action="submit">
          <MyPageRepresentiveImg
            src={
              userImg
                ? userImg
                : 'https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/4429919ce17c4d45b3c9095468065cbc/eff09c43aff1460f885dca2a6974dd85_1606815289.jpg'
            }
            alt="대표 이미지"
          />
          <MyPageEditIcon icon={faCirclePlus} />
          <MyPagePhotoInput
            type="file"
            accept="image/jpg"
            onChange={saveFileImage}
          />
        </form>
      </MyPageTopBackground>
      <div
        style={{
          marginTop: '35px',
          textAlign: 'center',
          fontSize: '12px',
          marginBottom: '4px',
        }}
      >
        이름 / 별명
      </div>
      <MyPageBasicInfo>
        <input
          type="text"
          defaultValue={userBasicData.name}
          disabled={editNames}
          name="name"
          onChange={onChangeNames}
        />
        <input
          type="text"
          defaultValue={userBasicData.nickName}
          disabled={editNames}
          name="nickName"
          onChange={onChangeNames}
        />
        <FontAwesomeIcon
          icon={editNames ? faPen : faFloppyDisk}
          onClick={() => {
            editNames ? setEditNames(false) : saveUserName();
          }}
        />
      </MyPageBasicInfo>
      <MyPageBasicInfoBox marginTop={30}>
        <MyIntroduceSelectBox
          name="gender"
          defaultValue={setGender(userBasicData.gender)}
          onChange={onChangeDatas}
        >
          {genderType.map(gender => (
            <MyIntroduceOptionBox>{setGender(gender)}</MyIntroduceOptionBox>
          ))}
        </MyIntroduceSelectBox>

        <MyIntroduceSelectBox
          name="age"
          defaultValue={userBasicData.age}
          onChange={onChangeDatas}
        >
          {ageArrage.map(age => (
            <MyIntroduceOptionBox>{age}</MyIntroduceOptionBox>
          ))}
        </MyIntroduceSelectBox>
        <MyIntroduceSelectBox
          name="location"
          defaultValue={location}
          onChange={onChangeDatas}
        >
          {loactionDataInSeoul.map(location => (
            <MyIntroduceOptionBox>{location}</MyIntroduceOptionBox>
          ))}
        </MyIntroduceSelectBox>
      </MyPageBasicInfoBox>
    </>
  );
}

export default MyBasicInfo;
