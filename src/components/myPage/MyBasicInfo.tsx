import React, { useState } from 'react';
import {
  MyPageBasicInfo,
  MyPageBasicInfoBox,
  MyPageRepresentiveImg,
  MyPageEditIcon,
  MyPagePhotoInput,
  MyPageTopContainer,
  ImgEditBtn,
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
    userId: number;
  };
  location: string;
};

const genderType = ['female', 'male'];
const ageArrage = [...new Array(80)].map((_, i) => (i + 1).toString());

function MyBasicInfo({ userBasicData, location }: myBasicInfoProps) {
  const [userImg, setUserImg] = useState(
    `${process.env.REACT_APP_SERVER_IP}/api/user/${userBasicData.userId}/img/represents`
  );
  const [editNames, setEditNames] = useState(true);
  const [userNames, setUserNames] = useState({ name: '', nickName: '' });
  const [userData, setUserData] = useState({
    age: userBasicData.age.toString(),
    location: location,
    gender: userBasicData.gender,
  });

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
    <MyPageTopContainer>
      <form action="submit" style={{ marginBottom: '20px' }}>
        <MyPageRepresentiveImg src={userImg} alt="대표 이미지" />
        <ImgEditBtn>
          <MyPageEditIcon icon={faCirclePlus} />
          <MyPagePhotoInput
            type="file"
            accept="image/jpg,image/png,image/jpeg,image/gif"
            onChange={saveFileImage}
          />
        </ImgEditBtn>
      </form>
      <p>이름 | 별명</p>
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
      <MyPageBasicInfoBox>
        <MyIntroduceSelectBox
          name="gender"
          defaultValue={setGender(userBasicData.gender)}
          onChange={onChangeDatas}
        >
          {genderType.map((gender, index) => (
            <MyIntroduceOptionBox key={index}>
              {setGender(gender)}
            </MyIntroduceOptionBox>
          ))}
        </MyIntroduceSelectBox>

        <MyIntroduceSelectBox
          name="age"
          defaultValue={userBasicData.age}
          onChange={onChangeDatas}
        >
          {ageArrage.map((age, index) => (
            <MyIntroduceOptionBox key={index}>{age}</MyIntroduceOptionBox>
          ))}
        </MyIntroduceSelectBox>
        <MyIntroduceSelectBox
          name="location"
          defaultValue={location}
          onChange={onChangeDatas}
        >
          {loactionDataInSeoul.map((location, index) => (
            <MyIntroduceOptionBox key={index}>{location}</MyIntroduceOptionBox>
          ))}
        </MyIntroduceSelectBox>
      </MyPageBasicInfoBox>
    </MyPageTopContainer>
  );
}

export default MyBasicInfo;
