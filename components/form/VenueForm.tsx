import {
  Stack,
  Box,
  Typography,
  OutlinedInput,
  Select,
  MenuItem,
  Chip,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useEffect, useState } from 'react';
import { Event, AvailableType, Venue } from '@/types';
import { supabase } from '@/utils/supabase/client';
import {
  FormLabel,
  FormLabelDesc,
  FormTitle,
} from '@/components/typography/formTypography';
import BpCheckbox from '@/components/event/Checkbox';
import { ZuButton, ZuInput } from '@/components/core';
import { TimeRange } from '@/app/spaces/[spaceid]/adminevents/[eventid]/Tabs/Venue/components';
import {
  XMarkIcon,
  PlusCircleIcon,
  PlusIcon,
  MinusIcon,
} from '@/components/icons';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { VENUE_TAGS } from '@/constant';
import SelectCheckItem from '@/components/select/selectCheckItem';
import dayjs from 'dayjs';
import FormUploader from './FormUploader';
import { useUploaderPreview } from '../PreviewFile/useUploaderPreview';

interface IVenue {
  venue: Venue;
  event: Event | undefined;
  handleClose: () => void;
}

const VenueForm = ({ event, venue, handleClose }: IVenue) => {
  const [name, setName] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [capacity, setCapacity] = useState<number>(0);
  const avatarUploader = useUploaderPreview();

  const daysOfWeek = [
    {
      label: 'MON',
      state: useState<AvailableType[]>([{ startTime: '', endTime: '' }]),
    },
    {
      label: 'TUE',
      state: useState<AvailableType[]>([{ startTime: '', endTime: '' }]),
    },
    {
      label: 'WED',
      state: useState<AvailableType[]>([{ startTime: '', endTime: '' }]),
    },
    {
      label: 'THU',
      state: useState<AvailableType[]>([{ startTime: '', endTime: '' }]),
    },
    {
      label: 'FRI',
      state: useState<AvailableType[]>([{ startTime: '', endTime: '' }]),
    },
    {
      label: 'SAT',
      state: useState<AvailableType[]>([{ startTime: '', endTime: '' }]),
    },
    {
      label: 'SUN',
      state: useState<AvailableType[]>([{ startTime: '', endTime: '' }]),
    },
  ];

  const createVenue = async () => {
    try {
      const bookings = daysOfWeek.reduce(
        (acc, { label, state }) => {
          acc[label.toLowerCase()] = state[0];
          return acc;
        },
        {} as Record<string, AvailableType[]>,
      );

      //   await supabase.from('venues').insert({
      //     name,
      //     tags: tags.join(','),
      //     eventId,
      //     avatar: avatarUploader.getUrl(),
      //     bookings: JSON.stringify(bookings),
      //     capacity,
      //     timezone: event?.timezone,
      //   });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: any) => {
    setTags(
      typeof e.target.value === 'string'
        ? e.target.value.split(',')
        : e.target.value,
    );
  };

  const renderDay = (
    label: string,
    state: [
      AvailableType[],
      React.Dispatch<React.SetStateAction<AvailableType[]>>,
    ],
  ) => {
    const [values, setValues] = state;
    return (
      <Stack direction="row" spacing="20px" key={label}>
        <Stack direction="row" spacing="20px" alignItems="center" flex="1">
          <BpCheckbox />
          <Typography variant="bodyBB">{label}</Typography>
        </Stack>
        <Stack spacing="10px" flex="4">
          {values.map((item, index) => (
            <TimeRange
              key={`${label}-Item-${index}`}
              values={values}
              setValues={setValues}
              id={index}
              timezone={event?.timezone as string}
            />
          ))}
        </Stack>
        <Stack direction="row" spacing="20px" alignItems="center" flex="1">
          <Stack
            padding="10px"
            sx={{ cursor: 'pointer' }}
            onClick={() => {
              if (values.filter((item) => item.error).length === 0) {
                setValues((prev) => [...prev, { startTime: '', endTime: '' }]);
              }
            }}
          >
            <PlusIcon size={5} />
          </Stack>
          <Stack
            padding="10px"
            sx={{ cursor: 'pointer' }}
            onClick={() => {
              const prev = [...values];
              prev.pop();
              setValues(prev);
            }}
          >
            <MinusIcon size={5} />
          </Stack>
        </Stack>
      </Stack>
    );
  };

  useEffect(() => {
    console.log(venue);
    setName(venue?.name);
    setTags(venue?.tags.split(','));
    setCapacity(venue?.capacity);
    avatarUploader.setUrl(venue?.avatar);
  }, [venue]);

  // "{"monday":[{"startTime":"","endTime":""}],"tuesday":[{"startTime":"04:00","endTime":"15:55","error":""}],"wednesday":[{"startTime":"","endTime":""}],"thursday":[{"startTime":"","endTime":""}],"friday":[{"startTime":"","endTime":""}],"saturday":[{"startTime":"","endTime":""}],"sunday":[{"startTime":"","endTime":""}]}"

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#222222',
        }}
        role="presentation"
        zIndex="100"
        borderLeft="1px solid #383838"
      >
        <Box
          display="flex"
          alignItems="center"
          height="50px"
          borderBottom="1px solid #383838"
          paddingX={3}
          gap={2}
          sx={{
            position: 'sticky',
            top: 0,
            backgroundColor: '#222222',
            zIndex: 10,
          }}
        >
          <ZuButton
            startIcon={<XMarkIcon size={5} />}
            onClick={handleClose}
            sx={{
              backgroundColor: 'transparent',
              fontWeight: 'bold',
            }}
          >
            Close
          </ZuButton>
          <Typography variant="subtitleSB">Venue Spaces</Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="20px" padding={3}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <FormTitle>Edit a Venue</FormTitle>
          </Stack>
          <Stack
            direction={'column'}
            spacing="30px"
            bgcolor="#262626"
            padding="20px"
            borderRadius="10px"
          >
            <FormTitle>Venue Space Details</FormTitle>
            <Stack spacing="10px">
              <FormLabel>Space Name*</FormLabel>
              <ZuInput
                value={name}
                placeholder="Standard Pass"
                onChange={(e) => setName(e.target.value)}
              />
            </Stack>
            <Stack spacing="20px">
              <Stack spacing="10px">
                <FormLabel>Space Tags</FormLabel>
                <FormLabelDesc>
                  Search or create categories related to your space
                </FormLabelDesc>
              </Stack>
              <Box>
                <Select
                  multiple
                  value={tags}
                  style={{ width: '100%' }}
                  onChange={handleChange}
                  input={<OutlinedInput label="Name" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        backgroundColor: '#222222',
                      },
                    },
                  }}
                >
                  {VENUE_TAGS.map((tag, index) => {
                    return (
                      <MenuItem value={tag.value} key={index}>
                        <SelectCheckItem
                          label={tag.label}
                          isChecked={
                            tags.findIndex((item) => item === tag.value) > -1
                          }
                        />
                      </MenuItem>
                    );
                  })}
                </Select>
              </Box>
              <Box
                display={'flex'}
                flexDirection={'row'}
                gap={'10px'}
                flexWrap={'wrap'}
              >
                {tags.map((tag, index) => {
                  return (
                    <Chip
                      label={
                        VENUE_TAGS.find((item) => item.value === tag)?.label
                      }
                      sx={{
                        borderRadius: '10px',
                      }}
                      onDelete={() => {
                        const newArray = tags.filter((item) => item !== tag);
                        setTags(newArray);
                      }}
                      key={index}
                    />
                  );
                })}
              </Box>
            </Stack>
            <Stack spacing="10px">
              <FormLabel>Space Image</FormLabel>
              <FormLabelDesc>
                Recommend min of 200x200px (1:1 Ratio)
              </FormLabelDesc>
              <FormUploader
                onChange={(url) => {
                  avatarUploader.setUrl(url);
                }}
              />
            </Stack>
            <Stack spacing="10px">
              <FormLabel>Space Capacity*</FormLabel>
              <ZuInput
                value={capacity}
                type="number"
                onChange={(e) => setCapacity(Number(e.target.value))}
              />
            </Stack>
          </Stack>
          <Stack
            direction={'column'}
            spacing="30px"
            bgcolor="#262626"
            padding="20px"
            borderRadius="10px"
          >
            <FormTitle>Available Bookings</FormTitle>
            <Typography variant="bodyBB" color="text.secondary">
              Your event timezone: {event?.timezone}
            </Typography>
            <Stack spacing="4px" direction={'row'}>
              <Typography variant="bodyBB" color="text.secondary">
                Your event timeframe:
              </Typography>

              <Typography variant="bodyBB">
                {`${dayjs(event?.startTime).format('MMMM')}, ${dayjs(event?.startTime).date()}, ${dayjs(event?.startTime).year()} - ${dayjs(event?.endTime).format('MMMM')}, ${dayjs(event?.endTime).date()}, ${dayjs(event?.endTime).year()}`}
              </Typography>
            </Stack>
            <Stack spacing="20px">
              {daysOfWeek.map(({ label, state }) => renderDay(label, state))}
            </Stack>
          </Stack>
          <Box display="flex" gap="20px">
            <ZuButton
              sx={{
                flex: 1,
              }}
              startIcon={<XMarkIcon />}
              onClick={() => {}}
            >
              Discard
            </ZuButton>
            <ZuButton
              sx={{
                color: '#67DBFF',
                backgroundColor: 'rgba(103, 219, 255, 0.10)',
                flex: 1,
              }}
              startIcon={<PlusCircleIcon color="#67DBFF" />}
              onClick={createVenue}
            >
              Add Space
            </ZuButton>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default VenueForm;
